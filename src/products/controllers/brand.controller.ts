import { Controller, Get } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { BrandService } from '../services/brand.service';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @ApiTags('brands')
  @Get()
  getBrands() {
    return this.brandService.getBrands();
  }
}
