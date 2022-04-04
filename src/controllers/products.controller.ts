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
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor() {
    console.log('ProductsController');
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      limit,
      offset,
      brand,
    };
  }

  @Get('filter')
  getProductsFiler() {
    return 'Yo soy un filtro';
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('id') id: string) {
    /*  response.status(200).send({
      message: `product ${id}`,
    }); */

    return {
      message: `product ${id}`,
    };
  }

  @Post()
  createProduct(@Body() payload: any) {
    return {
      message: 'Product created',
      payload,
    };
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'Product updated',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return {
      message: `product ${id} deleted`,
    };
  }
}
