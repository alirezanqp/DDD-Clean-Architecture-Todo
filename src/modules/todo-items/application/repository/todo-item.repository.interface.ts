import { TodoItemEntity } from '../../domain/todo-item.entity';

export interface TodoItemRepository {
  create(todoItem: TodoItemEntity): Promise<void>;
  findAll(): TodoItemEntity[];
  delete(id: string): void;
  updatePriority(id: string, priority: string): void;
}
