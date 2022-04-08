import { Module, Global } from '@nestjs/common';

const API_KEY = '123456789';
const API_KEY_PROD = 'xyz';
@Global()
@Module({
  providers: [
    /* Se usa generalmente para proveer valores usabñes dentro de los servicios e injectarlos de mejor manera */
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
