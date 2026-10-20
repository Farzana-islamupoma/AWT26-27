
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price!: number;

  @IsInt()
  @Min(0)
  quantity!: number;
}
