import { Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  private _counterId = 1;
  private customers: Customer[] = [];

  createCustomer(customer: CreateCustomerDto) {
    this._counterId += 1;
    const newCustomer = { id: this._counterId, ...customer };
    this.customers = [...this.customers, newCustomer];
  }

  getCustomers() {
    return this.customers;
  }
}
