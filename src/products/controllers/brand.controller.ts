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
import { CreateBrandDto, UpdateBrandDto } from '../dtos/band.dto';
import { BrandService } from '../services/brand.service';
@ApiTags('brands')
@Controller('brands')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get()
  getBrands() {
    return this.brandService.getBrands();
  }

  @Get(':id')
  getBrand(@Param('id', MongoIdPipe) id: string) {
    return this.brandService.getBrand(id);
  }

  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    return this.brandService.createBrand(payload);
  }

  @Put(':id')
  updateBrand(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandService.updateBrand(id, payload);
  }

  @Delete(':id')
  deleteBrand(@Param('id', MongoIdPipe) id: string) {
    return this.brandService.deleteBrand(id);
  }
}
