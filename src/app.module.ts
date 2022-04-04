import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { UserController } from './controllers/user.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandController } from './controllers/brand.controller';

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
  providers: [AppService],
})
export class AppModule {}
