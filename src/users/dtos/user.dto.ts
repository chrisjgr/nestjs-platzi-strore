import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDateString,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The user email' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly createdAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly updatedAt: Date;
}
