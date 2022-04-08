import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateBandDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly image: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly createdAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly updatedAt: Date;
}
