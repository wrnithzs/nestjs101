import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import {BookRequest} from "./model/request/book-request.request";
import {BookResponse} from "./model/response/book-response.interface";

@Controller('books')
export class BooksController {
    @Get()
    getHello(): string {
        return "ssss";
    }

    @Post()
    async create(@Body() bookRequest: BookRequest): Promise<BookResponse> {
        const data: BookResponse =  {
            author: "test", id: 0, isRecommended: false, name: "test", price: 0}
        return data;
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() bookRequest: BookRequest) {
        const data: BookResponse = {author: "", id: 0, isRecommended: false, name: "", price: 0}
        return data;
    }
}
