import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';
export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  @IsPhoneNumber()
  readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
