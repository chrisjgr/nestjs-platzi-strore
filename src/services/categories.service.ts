import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from 'src/entities/category.entity';
import { UpdateCategoryDto, CreateCategoryDto } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  _counterId = 1;
  categories: Category[] = [];

  createCategory(category: CreateCategoryDto) {
    this._counterId += 1;
    const newCategory = { id: this._counterId, ...category };
    this.categories = [...this.categories, newCategory];
  }

  updateCategory(id: number, category: UpdateCategoryDto) {
    const index = this.categories.findIndex((c) => c.id === id);

    if (!index) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    this.categories[index] = { ...this.categories[index], ...category };
    return this.categories[index];
  }

  deleteCategory(id: number) {
    const index = this.categories.findIndex((c) => c.id === id);

    if (!index) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    const newCategories = this.categories.filter((c) => c.id !== id);
    this.categories = [...newCategories];
  }

  getCategories() {
    return this.categories;
  }

  getCategory(id: number) {
    const category = this.categories.find((c) => c.id === id);

    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    return category;
  }
}
