import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsMongoId,
  IsDate,
  IsArray,
} from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  readonly customer: string; // 1:1 reference relation

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly products: string[]; // 1:N reference relation
}

export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products']),
) {}

export class UpdateProductsByOrderDto {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly products: string[]; // 1:N reference relation
}
