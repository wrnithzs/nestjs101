import {
    Body,
    Controller,
    ForbiddenException,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseFilters,
    UseInterceptors
} from '@nestjs/common';
import {BookRequestDto} from "./dto/bookRequest.dto";
import {Books} from "./interface/books.interface";
import {HttpExceptionFilter} from "../http-exception.filter";
import {LoggingInterceptor} from "../logging.interceptor";


@Controller('books')
export class BooksController {
    @Get()
    getHello(): string {
        return "ssss";
    }
    // @Post()
    // create(@Body() bookRequestDto: BookRequestDto): Books {
    //     console.log(bookRequestDto);
    //
    //     return bookRequestDto;
    // }
    @Post()
    async create(@Body() bookRequestDto: BookRequestDto) {
        console.log(' before Exception')
        throw new ForbiddenException( );
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() bookRequestDto: BookRequestDto) {
        console.log(typeof id)
        console.log(bookRequestDto);
        return bookRequestDto;
    }

}
