import { Injectable } from '@nestjs/common';
import { TodoItemRepository } from '../../application/repository/todo-item.repository.interface';
import { TodoItemEntity } from '../../domain/todo-item.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TodoItemMapper } from '../../todo-item.mapper';
import { TodoItem as TodoItemModel } from './todo-item.schema';

@Injectable()
export class MongooseTodoItemRepository implements TodoItemRepository {
  constructor(
    @InjectModel(TodoItemModel.name)
    private todoItemModel: Model<TodoItemModel>,
    private mapper: TodoItemMapper,
  ) {}

  async create(entity: TodoItemEntity): Promise<void> {
    const record = this.mapper.toPersistence(entity);
    await this.todoItemModel.create(record);
  }

  findAll(): TodoItemEntity[] {
    throw new Error('Method not implemented.');
  }
  delete(id: string): void {
    throw new Error('Method not implemented.');
  }
  updatePriority(id: string, priority: string): void {
    throw new Error('Method not implemented.');
  }
}
