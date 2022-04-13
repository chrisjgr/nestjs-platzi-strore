import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly customerId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly productId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly quantity: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly total: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
