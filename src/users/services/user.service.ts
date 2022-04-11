import { Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/user.dto';
import { Order } from '../entities/order.entity';

import { ProductsService } from '../../products/services/products.service';

@Injectable()
export class UserService {
  private _counterId = 1;
  private users: User[] = [];

  constructor(private productsService: ProductsService) {}

  createUser(user: CreateUserDto) {
    this._counterId += 1;

    const newUser = { id: this._counterId, ...user };
    this.users = [...this.users, newUser];

    return newUser;
  }

  async getOrdersByUSer(id_: number) {
    const user = this.users.find((u) => u.id === id_);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}
