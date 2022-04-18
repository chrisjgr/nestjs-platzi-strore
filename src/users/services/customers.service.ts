import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async getCustomers() {
    return await this.customerModel.find().exec();
  }

  async getCustomer(id: string) {
    const customer = await this.customerModel.findById(id).exec();

    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }

    return customer;
  }

  async createCustomer(customer: CreateCustomerDto) {
    const newCustomer = new this.customerModel(customer);

    return await newCustomer.save();
  }

  async updateCustomer(id: string, customer: CreateCustomerDto) {
    const updatedCustomer = await this.customerModel
      .findByIdAndUpdate(id, { $set: customer }, { new: true })
      .exec();

    if (!updatedCustomer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }

    return updatedCustomer;
  }

  async deleteCustomer(id: string) {
    const deletedCustomer = await this.customerModel
      .findByIdAndDelete(id)
      .exec();

    if (!deletedCustomer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }

    return deletedCustomer;
  }
}
