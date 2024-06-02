import { Injectable } from '@nestjs/common';
import { TodoItemRepository } from '../../application/repository/todo-item.repository.interface';
import { TodoItemEntity } from '../../domain/todo-item.entity';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { TodoItemMapper } from '../../todo-item.mapper';

@Injectable()
export class MongooseTodoItemRepository implements TodoItemRepository {
  constructor(
    @InjectConnection('TodoItem') private connection: Connection,
    private mapper: TodoItemMapper,
  ) {}
  create(entity: TodoItemEntity): void {
    const record = this.mapper.toPersistence(entity);
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
