import {Module} from '@nestjs/common';
import {BooksModule} from './features/books/books.module';

@Module({
    imports: [BooksModule],
    providers: [],
})
export class AppModule {
}
