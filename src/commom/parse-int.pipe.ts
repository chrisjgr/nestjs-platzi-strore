import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = Number(value);

    if (isNaN(val)) {
      throw new BadRequestException(`${value} is not a number`);
    }

    return value;
  }
}
