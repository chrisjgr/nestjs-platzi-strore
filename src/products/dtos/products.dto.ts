import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  ValidateIf,
  ValidateNested,
  IsMongoId,
} from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

import { CreateCategoryDto } from '../dtos/categories.dto';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

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

  /* Validacion en cascada embebido */
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  readonly category: CreateCategoryDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly brand: string;
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
