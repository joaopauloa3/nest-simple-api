import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    @MaxLength(255)
    @IsString()
    name: string;

    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    price: number
}
