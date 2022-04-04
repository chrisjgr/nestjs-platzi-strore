import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private _counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 100,
      stock: 100,
      image: '',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id == id);
  }

  createProduct(product: Product) {
    this._counterId += 1;
    const newProduct = {
      id: this._counterId,
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, newProduct: Product) {
    const newProducts = this.products.map((product) =>
      product.id === id ? { ...product, ...newProduct } : product,
    );

    this.products = newProducts;
    return newProduct;
  }

  deleteProduct(id: number) {
    const newProducts = this.products.filter((product) => product.id !== id);
    this.products = newProducts;
    return this.products;
  }
}
