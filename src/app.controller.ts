import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo';
  }

  @Get('nuevo')
  newEmpoint() {
    return `<h1>Nuevo emp</h1>`;
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
