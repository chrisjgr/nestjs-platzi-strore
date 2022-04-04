import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {
    console.log('ProductsController');
  }

  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `productos ${limit} y ${offset} y ${brand}`;
  }

  @Get('filter')
  getProductsFiler() {
    return 'Yo soy un filtro';
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }
}
