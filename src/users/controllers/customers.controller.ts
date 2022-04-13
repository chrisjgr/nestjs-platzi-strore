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
import { CreateCustomerDto } from '../dtos/customer.dto';
import { CustomersService } from '../services/customers.service';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customersService.getCustomers();
  }

  @Get('id')
  getCustomer(@Param('id', MongoIdPipe) id: string) {
    return this.customersService.getCustomer(id);
  }

  @Post()
  createCustomer(@Body() payload: CreateCustomerDto) {
    return this.customersService.createCustomer(payload);
  }

  @Put(':id')
  updateCustomer(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: CreateCustomerDto,
  ) {
    return this.customersService.updateCustomer(id, payload);
  }

  @Delete(':id')
  deleteCustomer(@Param('id', MongoIdPipe) id: string) {
    return this.customersService.deleteCustomer(id);
  }
}
