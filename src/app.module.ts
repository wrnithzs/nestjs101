import {Module} from '@nestjs/common';
import {BooksModule} from './features/books/books.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Book} from "./features/books/entity/book.entity";
import {ConfigModule} from "@nestjs/config";
import { CustomerController } from './features/customers/customer.controller';
import { CustomerService } from './features/customers/customer.service';
import { CustomerModule } from './features/customers/customer.module';
import configuration from "../config/configuration";
import {Customer} from "./features/customers/entity/customer.entity";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            envFilePath:'.env'
            }
        ),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'Book',
            entities: [Book,Customer],
            synchronize: false,
        }),
        BooksModule,
        CustomerModule]
})
export class AppModule {
}
