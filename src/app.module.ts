import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { UserController } from './controllers/user.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { OrdersService } from './services/orders.service';
import { CustomersService } from './services/customers.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UserController,
    CustomersController,
    BrandController,
  ],
  providers: [AppService, ProductsService, CategoriesService, OrdersService, CustomersService, UserService],
})
export class AppModule {}
