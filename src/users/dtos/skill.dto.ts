import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  color: string;
}

export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
