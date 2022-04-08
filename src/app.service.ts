import { Injectable, Inject } from '@nestjs/common';

/* Paquete para procesar coinfiguraciones y variables de entornos. */
import { ConfigType } from '@nestjs/config';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    /* Usamos @Inject para importar Values y factories que no sean clases. */
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASK') private tasks: any[],
    @Inject(config.KEY) private configType: ConfigType<typeof config>,
  ) {}

  /* Se puede usar tanto config como configTypes */
  /*  private config: ConfigService, */

  getHello() {
    return {
      useValueApiKey: this.apiKey, // traido desde use Value
      useFactoryTasks: this.tasks, // traido desde use factory
      envAPiKeyType: this.configType.apiKey, //  traido desde env con nest/config configType
      envDtbType: this.configType.database.name,
      envDtbPortType: this.configType.database.port, // traido desde env con nest/config configType

      /*  envAPiKey: this.config.get<string>('API_KEY'), */
      //  traido desde env con nest/config con configService

      /* envDtb: this.config.get<string>('DATABASE_NAME'), */
      // traido desde env con nest/config con configService
    };
  }
}
