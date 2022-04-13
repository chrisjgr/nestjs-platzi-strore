import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './controllers/user.controller';
import { CustomersController } from './controllers/customers.controller';

import { UserService } from './services/user.service';
import { CustomersService } from './services/customers.service';

import { ProductsModule } from '../products/products.module';
import { User, UserSchema } from './entities/user.entity';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController, CustomersController],
  providers: [UserService, CustomersService],
})
export class UsersModule {}
