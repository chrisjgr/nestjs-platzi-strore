import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';
export class CreateBandDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly image: string;

  @IsNotEmpty()
  @IsDateString()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly updatedAt: Date;
}
