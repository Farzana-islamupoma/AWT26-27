
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from "class-validator";

export class CreateMenuItemDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsBoolean()
  isAvailable!: boolean;
}

export class CreateCateringEventDto {
  @IsString()
  @IsNotEmpty()
  eventName!: string;

  @IsDateString()
  @IsNotEmpty()
  eventDate!: string;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsInt()
  @Min(1)
  expectedAttendees!: number;
}

export class CreateCateringOrderDto {
  @IsString()
  @IsNotEmpty()
  requesterName!: string;

  @IsInt()
  @Min(1)
  eventId!: number;

  @IsInt()
  @Min(1)
  numberOfMeals!: number;

  @IsString()
  @IsNotEmpty()
  status!: string;
}
