import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  phone: string;
}

export const CustomerSechema = SchemaFactory.createForClass(Customer);
