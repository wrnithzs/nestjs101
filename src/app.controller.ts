import {Body, Controller, Delete, Get, Post, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {LoggingInterceptor} from "./logging.interceptor";

@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  create(@Body() book ): string {
    console.log(book);
    return book;
  }


}
