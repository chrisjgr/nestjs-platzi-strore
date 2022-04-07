import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CustomersController } from './controllers/customers.controller';
import { UserService } from './services/user.service';
import { CustomersService } from './services/customers.service';

@Module({
  controllers: [UserController, CustomersController],
  providers: [UserService, CustomersService],
})
export class UsersModule {}
