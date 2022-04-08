import { Controller, Get } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }
}
