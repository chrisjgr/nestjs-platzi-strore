import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dtos/orders.dto';

@Injectable()
export class OrdersService {
  _counterId = 1;
  orders: Order[] = [];

  createOrder(order: CreateOrderDto) {
    this._counterId += 1;
    const newOrder = { id: this._counterId, ...order };
    this.orders = [...this.orders, newOrder];
  }

  getOrders() {
    return this.orders;
  }
}
