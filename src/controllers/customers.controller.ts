import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';

@Controller('customers')
export class CustomersController {
  constructor(private categoryService: CategoriesService) {}

  @Get()
  getCustomer() {
    return this.categoryService.getCategories();
  }
}
