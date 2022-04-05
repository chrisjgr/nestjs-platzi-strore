import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDateString,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsDateString()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly updatedAt: Date;
}
