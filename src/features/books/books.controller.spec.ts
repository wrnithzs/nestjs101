import {Test, TestingModule} from '@nestjs/testing';
import {BooksController} from './books.controller';
import {BooksService} from "./books.service";

import {Repository} from "typeorm";
import {Book} from "./entity/book.entity";
import {getRepositoryToken} from "@nestjs/typeorm";


describe('BooksController', () => {
    let booksController: BooksController;
    let booksService: BooksService;
    let bookRepository: Repository<Book>;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [BooksController],
            providers: [
                {
                    provide: getRepositoryToken(Book),
                    useClass: Repository
                },
                BooksService
            ],
        }).compile()

        bookRepository = module.get(getRepositoryToken(Book));
        booksService = module.get<BooksService>(BooksService);
        booksController = module.get<BooksController>(BooksController);
    });

    describe('create', () => {
        it('should return book created', async () => {
            const bookRequest = {
                name: "book_create",
                author: "author_create",
                price: 300,
                isRecommended: true
            }

            const bookResponse = {
                id: 11,
                name: "book_test",
                author: "author_test",
                price: 300,
                isRecommended: true
            }

            const saveBook = jest.spyOn(bookRepository, 'save').mockResolvedValue(bookResponse)
            expect(await booksController.create(bookRequest)).toBe(bookResponse);
            expect(saveBook).toBeCalled()
        });
    })

    describe('findAll', () => {
        it('should return an array of books ', async () => {
            const bookResponse = [{
                id: 1,
                name: "book_findAll",
                author: "author_test",
                price: 300,
                isRecommended: true
            }]

            const getAllBook =  jest.spyOn(bookRepository, 'find').mockResolvedValue(bookResponse)
            expect(await booksController.findAll()).toBe(bookResponse);
            expect(getAllBook).toBeCalled()
        });
    })

    describe('findOne',  () => {
        it('should return a book ', async () => {
            const id = 1
            const bookResponse = {
                id: 123,
                name: "book_findOne",
                author: "author_test",
                price: 300,
                isRecommended: true
            }
            const getBook  = jest.spyOn(bookRepository, 'findOne').mockResolvedValue(bookResponse)
            expect(await booksController.findOne(id)).toBe(bookResponse);
            expect(getBook).toBeCalled()
        });
    })

    describe('Update',  () => {
        it('should return a bookUpdated ', async () => {
            const id = 1

            const bookRequest = {
                name: "book_send_update",
                author: "author_update",
                price: 300,
                isRecommended: true
            }
            const book_fetch = {
                id: 123,
                name: "book_fetch",
                author: "author_test",
                price: 300,
                isRecommended: true
            }
            const bookResponse = {
                id: 123,
                name: "book_updated",
                author: "author_test",
                price: 300,
                isRecommended: true
            }
            const getBook  = jest.spyOn(bookRepository, 'findOne').mockResolvedValue(book_fetch)
            const saveBookUpdate  = jest.spyOn(bookRepository, 'save').mockResolvedValue(bookResponse)
            expect(await booksController.update(id, bookRequest)).toBe(bookResponse);
            expect(getBook).toBeCalled()
        });
    })

    describe('Delete',  () => {
        it('should return null ', async () : Promise<void>  => {
            const id = 1
            let  bookResponse ;
            const getBook  = jest.spyOn(bookRepository, 'delete').mockResolvedValue( bookResponse )
            expect(await booksController.remove(id)).toBe(bookResponse);
            expect(getBook).toBeCalled()
        });
    })
});
