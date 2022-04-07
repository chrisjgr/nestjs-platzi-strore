import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/user.dto';
import { ParseIntPipe } from '../../commom/parse-int.pipe';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOrdersByUSer(id);
  }

  @Post('create')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
