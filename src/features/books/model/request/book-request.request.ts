import {IsNotEmpty} from "class-validator";

export class BookRequest {

    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    author: string;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    isRecommended: boolean
}
