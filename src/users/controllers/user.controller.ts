import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/user.dto';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /*  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOrdersByUSer(id);
  } */

  @Get(':id')
  getUser(@Param('id', MongoIdPipe) id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.userService.createUser(payload);
  }

  @Put(':id')
  updateUser(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: CreateUserDto,
  ) {
    return this.userService.updateUser(id, payload);
  }

  @Delete(':id')
  deleteUser(@Param('id', MongoIdPipe) id: string) {
    return this.userService.deleteUser(id);
  }
}
