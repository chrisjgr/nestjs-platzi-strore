import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { log } from 'console';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll() {
    try {
      return this.productModel.find().exec();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error while fetching products');
    }
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  /* createProduct(product: CreateProductDto) {
    this._counterId += 1;
    const newProduct = {
      id: this._counterId,
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, newProduct: UpdateProductDto) {
    const newProducts = this.products.map((product) =>
      product.id === id ? { ...product, ...newProduct } : product,
    );

    this.products = newProducts;
    return newProduct;
  }

  deleteProduct(id: number) {
    const product = this.products.find((item) => item.id == id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    const newProducts = this.products.filter((product) => product.id !== id);
    this.products = newProducts;
    return this.products;
  } */
}
