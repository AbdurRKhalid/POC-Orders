import { IsNotEmpty, IsObject, IsString } from "class-validator";

export class AddOrderDto {
    @IsString()
    @IsNotEmpty()
    customerId: string;

    @IsObject()
    @IsNotEmpty()
    products: {
        productId: string;
        amount: number;
    }
}