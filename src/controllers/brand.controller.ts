import { Controller, Get } from '@nestjs/common';
import { BrandService } from '../services/brand.service';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get()
  getBrands() {
    return this.brandService.getBrands();
  }
}
