import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Skill, SkillSchema } from './skils.entity';

@Schema()
export class Customer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  /* Relacion uno a muchos embebido tipado */
  @Prop({ type: [SkillSchema] })
  skills: Types.Array<Skill>; // Relacion 1:N Embebido
}

export const CustomerSechema = SchemaFactory.createForClass(Customer);
