import { Injectable } from '@nestjs/common';
import {BookRequest} from "./request/book-request.interface";
import {BookResponse} from "./response/book-response.interface";

@Injectable()
export class BooksService {
    private booksRequest: BookRequest[] = [];
    private booksResponse: BookResponse[] = [];

    create(book: BookRequest) {
        this.booksRequest.push(book);
    }

    findAll(): BookResponse[] {
        return this.booksResponse;
    }
}
