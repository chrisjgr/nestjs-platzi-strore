import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, ProductsModule, HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,

    /* No usar este metodo para conexiones a apis externas a menso que sea cloud o propio de la arquitectura, mas alla de eso es recomendable usarlos unicamente para conexion de bases de Datos */
    {
      provide: 'TASK',
      useFactory: async (http: HttpService) => {
        try {
          const tasks = await http.get(
            'https://jsonplaceholder.typicode.com/todos',
          );

          const data = await (await firstValueFrom(tasks)).data;

          return data;
        } catch (error) {
          console.log(error);
        }
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
