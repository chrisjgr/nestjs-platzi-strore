import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Category } from '../entities/category.entity';
import { UpdateCategoryDto, CreateCategoryDto } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async getCategories() {
    return await this.categoryModel.find().exec();
  }

  async getCategory(id: number) {
    const category = await this.categoryModel.findById(id).exec();

    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    return category;
  }

  async createCategory(category: CreateCategoryDto) {
    const newCategory = new this.categoryModel(category);

    return await newCategory.save();
  }

  updateCategory(id: number, changes: UpdateCategoryDto) {
    const category = this.categoryModel.findByIdAndUpdate(id, changes, {
      new: true,
    });

    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
  }

  deleteCategory(id: number) {
    const category = this.categoryModel.findByIdAndDelete(id).exec();

    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    return category;
  }
}
