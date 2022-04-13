import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { CreateCategoryDto } from '../dtos/categories.dto';
import { CategoriesService } from '../services/categories.service';
@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  @Get('')
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id', MongoIdPipe) id: string) {
    return this.categoryService.getCategory(id);
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.categoryService.createCategory(payload);
  }

  @Put(':id')
  updateCategory(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: CreateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id', MongoIdPipe) id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
