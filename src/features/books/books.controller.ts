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
import {BookResponse} from "./model/response/book-response.response";
import {BooksService} from "./books.service";
import {ConfigService} from "@nestjs/config";

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService, private configService: ConfigService) {
        const dbUser = this.configService.get<string>('DATABASE_USER');
        const dbHost = this.configService.get<string>('database.host');
        console.log(dbUser, dbHost)
    }

    @Get()
    findAll() {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.bookService.findOne(id);
    }

    @Post()
    async create(@Body() bookRequest: BookRequest) {
        return await this.bookService.create(bookRequest);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() bookRequest: BookRequest) {
        console.log(bookRequest)
        return await this.bookService.update(id, bookRequest);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) : Promise<void>{
        return await this.bookService.remove(id);
    }
}
