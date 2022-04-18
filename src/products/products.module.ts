import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { BrandController } from './controllers/brand.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';

import { BrandService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';

import { Product, ProductSchema } from './entities/product.entity';
import { Category, CategorySchema } from './entities/category.entity';
import { Brand, BrandSchema } from './entities/brand.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: Category.name,
        schema: CategorySchema,
      },
      {
        name: Brand.name,
        schema: BrandSchema,
      },
    ]),
  ],
  controllers: [BrandController, CategoriesController, ProductsController],
  providers: [BrandService, CategoriesService, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
