import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  ValidateIf,
} from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDTO {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  limit: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(0)
  minPrice: number;

  @ApiProperty()
  @ValidateIf((param) => param.minPrice)
  @IsOptional()
  @IsNumber()
  @IsPositive()
  maxPrice: number;
}
