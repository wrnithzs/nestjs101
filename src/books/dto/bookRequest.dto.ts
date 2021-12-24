import {IsNotEmpty} from "class-validator";

export class BookRequestDto {

    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    author: string;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    is_recommended: boolean
}
