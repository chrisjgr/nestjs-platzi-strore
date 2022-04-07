import { Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  private _counterId = 1;
  private users: User[] = [];

  createUser(user: CreateUserDto) {
    this._counterId += 1;

    const newUser = { id: this._counterId, ...user };
    this.users = [...this.users, newUser];

    return newUser;
  }
}
