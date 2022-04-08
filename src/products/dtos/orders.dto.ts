import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @IsNumber()
  @IsNotEmpty()
  readonly customerId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @IsNotEmpty()
  readonly total: number;

  @IsDateString()
  @IsNotEmpty()
  readonly createdAt: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly updatedAt: Date;
}
