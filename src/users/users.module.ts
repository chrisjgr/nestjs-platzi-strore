import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './controllers/user.controller';
import { CustomersController } from './controllers/customers.controller';
import { OrdersController } from './controllers/orders.controller';

import { UserService } from './services/user.service';
import { CustomersService } from './services/customers.service';
import { OrdersService } from 'src/users/services/orders.service';

import { ProductsModule } from '../products/products.module';
import { User, UserSchema } from './entities/user.entity';
import { Customer, CustomerSechema } from './entities/customer.entity';
import { Order, OrderSchema } from './entities/order.entity';
import { ProfileController } from './controllers/profile.controller';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Customer.name,
        schema: CustomerSechema,
      },
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],

  controllers: [UserController, CustomersController, OrdersController, ProfileController],
  providers: [UserService, CustomersService, OrdersService],
  exports: [UserService],
})
export class UsersModule {}
