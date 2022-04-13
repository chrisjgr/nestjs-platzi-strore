import { Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
export class Brand extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  image: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
