import { Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
export class Order extends Document {
  @Prop({ required: true })
  customerId: string;

  @Prop({ required: true })
  productId: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
