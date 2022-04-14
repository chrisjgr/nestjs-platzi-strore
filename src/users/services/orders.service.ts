import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from '../../users/entities/order.entity';
import { CreateOrderDto } from '../../users/dtos/orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async getOrders() {
    return await this.orderModel
      .find()
      .populate('customer')
      .populate('products')
      .exec();
  }

  async getOrder(id: string) {
    const order = await this.orderModel
      .findById(id)
      .populate('customer')
      .populate('products')
      .exec();

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return order;
  }

  async createOrder(order: CreateOrderDto) {
    try {
      const newOrder = new this.orderModel(order);

      return await newOrder.save();
    } catch (error) {
      if (error.name === 'ValidationError' && error.errors) {
        throw new BadRequestException(error.message);
      }

      throw new InternalServerErrorException(error);
    }
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
