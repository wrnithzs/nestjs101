import {Module} from '@nestjs/common';
import {BooksModule} from './features/books/books.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Book} from "./features/books/entity/book.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'Book',
            entities: [Book],
            synchronize: false,
        }),
        BooksModule],
    providers: [],
})
export class AppModule {
}
