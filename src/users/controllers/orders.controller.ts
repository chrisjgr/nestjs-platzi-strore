import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { CreateOrderDto, UpdateProductsByOrderDto } from '../dtos/orders.dto';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }

  @Get(':id')
  getOrder(@Param('id', MongoIdPipe) id: string) {
    return this.orderService.getOrder(id);
  }

  @Post()
  createOrder(@Body() payload: CreateOrderDto) {
    return this.orderService.createOrder(payload);
  }

  @Put(':id')
  updateOrder(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: CreateOrderDto,
  ) {
    return this.orderService.updateOrder(id, payload);
  }

  @Put(':id/products')
  updateProducts(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateProductsByOrderDto,
  ) {
    return this.orderService.addProducts(id, payload.products);
  }

  @Delete(':id')
  deleteOrder(@Param('id', MongoIdPipe) id: string) {
    return this.orderService.deleteOrder(id);
  }

  @Delete(':id/product/:productId')
  removeProduct(
    @Param('id', MongoIdPipe) id: string,
    @Param('productId', MongoIdPipe) productId: string,
  ) {
    return this.orderService.removeProduct(id, productId);
  }
}
