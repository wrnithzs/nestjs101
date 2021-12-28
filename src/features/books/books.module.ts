import {Module} from '@nestjs/common';
import {BooksService} from './books.service';
import {BooksController} from "./books.controller";
import {TypeOrmModule} from '@nestjs/typeorm';
import {Book} from "./entity/book.entity";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([Book])
    ],
    controllers: [BooksController],
    providers: [BooksService]
})
export class BooksModule {

}
