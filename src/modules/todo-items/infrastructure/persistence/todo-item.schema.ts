import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoItemDocument = HydratedDocument<TodoItem>;

@Schema({ _id: false })
export class TodoItem {
  @Prop()
  id: string;

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

export const TodoItemModel = SchemaFactory.createForClass(TodoItem);
