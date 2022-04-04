import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Delete,
  Put,
  Body,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
    console.log('ProductsController');
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductsFiler() {
    return 'Yo soy un filtro';
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    /*   response.status(200).send({
      message: `product ${id}`,
    }); */

    return this.productsService.findOne(id);
  }

  @Post()
  createProduct(@Body() payload: any) {
    return this.productsService.createProduct(payload);
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.productsService.updateProduct(id, payload);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }
}
