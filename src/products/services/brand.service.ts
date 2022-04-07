import { Injectable } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandService {
  private _counterId = 0;
  private brands: Brand[] = [];

  getBrands() {
    return this.brands;
  }
}
