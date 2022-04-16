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
import { Request } from 'express';

import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { PayloadToken } from 'src/auth/models/toke.model';
import { Public } from '../../auth/decorators/public.decorator';

@ApiTags('products')
@UseGuards(JwtAuthGuard) // Guard para validar el token y decodificarlo.
@Controller('products')
export class ProductsController {
  /* Cada vez que se ejecute un servicio enviara en los Request del mismo el token decodificado */

  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  @Public()
  getProducts(@Req() req: Request, @Query() params: FilterProductsDTO) {
    const user = req.user as PayloadToken; // Siempre vendra el token decodificado.
    console.log(user);
    return this.productsService.findAll(params);
  }

  @Get('filter')
  @Public()
  getProductsFiler() {
    return 'Yo soy un filtro';
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @Public()
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
