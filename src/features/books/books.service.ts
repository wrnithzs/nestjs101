import {HttpException, Inject, Injectable} from '@nestjs/common';
import {BookRequest} from "./model/request/book-request.request";
import {BookResponse} from "./model/response/book-response.response";
import {Repository} from "typeorm";
import {Book} from './entity/book.entity';
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>
    ) {
    }

    async create(bookRequest: BookRequest) {
        console.log(bookRequest)
        if (bookRequest.price < 100) {
            throw new HttpException({message: 'cannot create book because price less than 100'}, 422)
        }
        return await this.bookRepository.save(bookRequest);
    }

    async findAll(): Promise<BookResponse[]> {
        const book = await this.bookRepository.find()
        console.log(book)
        return book;
    }

    async findOne(id): Promise<BookResponse> {

        const book = await this.bookRepository.findOne(id)
        console.log(book)
        return book;
    }

    async update(id, bookRequest: BookRequest) {
        let book = await this.bookRepository.findOne(id)
        console.log(book)
        book.name = bookRequest.name;
        book.author = bookRequest.author;
        book.price = bookRequest.price
        const result = await this.bookRepository.save(book);
        console.log(result)
        return result;
    }

    async remove(id): Promise<void> {
        await this.bookRepository.delete(id);
    }
}
