import { IsInt, IsNotEmpty, IsPositive, IsDate } from "class-validator"
import { Type } from "class-transformer"

export class CreateStockOutputDto {
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    product_id: number;

    
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    quantity: number;

    
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    date: Date;
}
