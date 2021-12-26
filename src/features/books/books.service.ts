import {Inject, Injectable} from '@nestjs/common';
import {BookRequest} from "./model/request/book-request.request";
import {BookResponse} from "./model/response/book-response.interface";
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

    //
    // private booksRequest: BookRequest[] = [];
    // // private booksResponse: BookResponse[] = [];

    async create(bookRequest: BookRequest) {
        console.log(bookRequest)
        return await this.bookRepository.save(bookRequest);
    }

    async findAll(): Promise<BookResponse[]> {
        return await this.bookRepository.find();
    }

    async findOne(id): Promise<BookResponse>  {
       const book  = await this.bookRepository.findOne(id)
        console.log(book)
        return book;
    }

    async update(id, bookRequest: BookRequest){
        const book = await this.bookRepository.findOne(id)
         console.log(book)
         book.name = bookRequest.name;
         book.author = bookRequest.author;
         book.price = bookRequest.price
        return await this.bookRepository.save(book);
    }

    async remove(id): Promise<void> {
         await this.bookRepository.delete(id);
    }
}
