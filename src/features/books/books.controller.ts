import {
    Body,
    Controller,
    ForbiddenException,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import {BookRequestDto} from "./dto/bookRequest.dto";

@Controller('books')
export class BooksController {
    @Get()
    getHello(): string {
        return "ssss";
    }

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
