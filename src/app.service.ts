import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    /* Usamos @Inject para importar Values y factories que no sean clases. */
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASK') private tasks: any[],
  ) {}

  getHello() {
    return {
      message: this.apiKey,
      tasks: this.tasks,
    };
  }
}
