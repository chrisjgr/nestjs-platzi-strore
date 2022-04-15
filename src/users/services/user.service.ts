import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUser(id) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async createUser(user: CreateUserDto) {
    const newUser = new this.userModel(user);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    const model = await newUser.save();

    const { password, ...userModel } = model.toJSON();

    return userModel;
  }

  async updateUser(id, user: CreateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      { $set: user },
      { new: true },
    );

    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return updatedUser;
  }

  async deleteUser(id) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return deletedUser;
  }
}
