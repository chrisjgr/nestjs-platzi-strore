import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

import { ConfigType } from '@nestjs/config';

import config from 'src/config';

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
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, host, port, dbName } = configService.mongo;

        const uri = `${connection}://${host}:${port}`;
        console.log(uri);

        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);

        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
