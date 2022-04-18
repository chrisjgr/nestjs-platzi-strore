import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import config from 'src/config';

const API_KEY = '123456789';
const API_KEY_PROD = 'xyz';

@Global()
@Module({
  imports: [
    /* Configuracion con mongoose */
    /* MongooseModule.forRoot('mongodb://localhost:27017', {
      user: 'root',
      pass: 'root',
      dbName: 'platzi-store',
    }), 
    */

    /* Mongoose de manera asincrona */
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, host, dbName, user, password } =
          configService.mongo;

        return {
          uri: `${connection}://${host}`,
          user: user,
          pass: password,
          dbName: dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    /* Se usa generalmente para proveer valores usabñes dentro de los servicios e injectarlos de mejor manera */
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, host, dbName, user, password } =
          configService.mongo;

        const uri = `${connection}://${user}:${password}@${host}`; // el Pueste debe estar en el host

        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);

        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'MONGO', MongooseModule],
})
export class DatabaseModule {}
