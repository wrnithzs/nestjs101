import {
    Body,
    Controller, Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import {BookRequest} from "./model/request/book-request.request";
import {BookResponse} from "./model/response/book-response.interface";
import {BooksService} from "./books.service";

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) {
    }

    @Get()
    findAll(bookResponse: BookResponse) {

        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, bookResponse: BookResponse) {
        return this.bookService.findOne(id);
    }

    @Post()
    async create(@Body() bookRequest: BookRequest) {
        // const data: BookResponse =  {
        //     author: "test", id: 0, isRecommended: false, name: "test", price: 0}
        return await this.bookService.create(bookRequest);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() bookRequest: BookRequest) {
        console.log(bookRequest)
        // const data: BookResponse = {author: "", id: 0, isRecommended: false, name: "", price: 0}
        return await this.bookService.update(id, bookRequest);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) : Promise<void>{
        // const data: BookResponse = {author: "", id: 0, isRecommended: false, name: "", price: 0}
        return await this.bookService.remove(id);
    }
}
