import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dtos/orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async getOrders() {
    return await this.orderModel.find().exec();
  }

  async getOrder(id: string) {
    const order = await this.orderModel.findById(id).exec();

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return order;
  }

  async createOrder(order: CreateOrderDto) {
    const newOrder = new this.orderModel(order);

    return await newOrder.save();
  }

  async updateOrder(id: string, changes: CreateOrderDto) {
    const updateOrder = await this.orderModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();

    if (!updateOrder) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return updateOrder;
  }

  async deleteOrder(id: string) {
    const deleteOrder = await this.orderModel.findByIdAndDelete(id).exec();

    if (!deleteOrder) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return deleteOrder;
  }
}
