import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Category, Children } from 'src/nested/dto/nested.dto';

export type NestedDocument = Category & Document;

@Schema()
export class Nested {
  @Prop({ required: true, unique: true, type: String })
  id: string;
  @Prop({ required: true, unique: false, type: String })
  name: string;
  @Prop({ required: false, unique: false, type: [], default: [] })
  children?: Children[];
}

export const NestedSchema = SchemaFactory.createForClass(Nested);
