import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoItemDocument = HydratedDocument<TodoItem>;

@Schema({ _id: false })
export class TodoItem {
  @Prop()
  _id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  priority: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem);
