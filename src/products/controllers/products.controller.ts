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
  UseGuards,
  Req,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { MongoIdPipe } from 'src/common/mongo-id.pipe';

import { ProductsService } from '../services/products.service';
import {
  CreateProductDto,
  FilterProductsDTO,
  UpdateProductDto,
} from '../dtos/products.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@ApiTags('products')
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts(@Req() req: Request, @Query() params: FilterProductsDTO) {
    console.log(req.user);

    return this.productsService.findAll(params);
  }

  @Get('filter')
  getProductsFiler() {
    return 'Yo soy un filtro';
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    return this.productsService.createProduct(payload);
  }

  @Put(':id')
  updateProduct(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, payload);
  }

  @Delete(':id')
  deleteProduct(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.deleteProduct(id);
  }
}
