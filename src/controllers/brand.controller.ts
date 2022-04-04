import { Controller, Get } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get()
  getBrands() {
    return 'Brands';
  }
}
