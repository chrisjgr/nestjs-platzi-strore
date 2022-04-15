import {
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';

import { AapiKeyGuard } from './auth/guards/aapi-key.guard';
@UseGuards(AapiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello() {
    return this.appService.getHello();
  }

  @Get('nuevo')
  @Public()
  newEndpoint() {
    return `<h1>Nuevo emp</h1>`;
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('tasks')
  getTasks() {
    return this.appService.getTasks();
  }
}
