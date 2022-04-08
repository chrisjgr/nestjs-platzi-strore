import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return `<h1>Nuevo emp</h1>`;
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
