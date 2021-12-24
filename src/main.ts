import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {LoggingInterceptor} from "./logging.interceptor";
import {HttpExceptionFilter} from "./http-exception.filter";
import {TransformInterceptor} from "./transform.interceptor";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor())
    app.useGlobalFilters(new HttpExceptionFilter())

    await app.listen(3000);
}

bootstrap();
