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
import { CreateOrderDto } from '../dtos/orders.dto';
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

  @Delete(':id')
  deleteOrder(@Param('id', MongoIdPipe) id: string) {
    return this.orderService.deleteOrder(id);
  }
}
