import { Injectable } from '@nestjs/common';
import {BookRequest} from "./model/request/book-request.request";
import {BookResponse} from "./model/response/book-response.interface";

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
