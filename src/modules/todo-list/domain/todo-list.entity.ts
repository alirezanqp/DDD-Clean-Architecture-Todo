import { randomUUID } from 'crypto';
import { AggregateRoot } from 'src/libs/ddd';

import { CreateTodoListProps, TodoListProps } from './todo-list.types';
import { TodoListCreatedDomainEvent } from './events/todo-list-created.event';

export class TodoListEntity extends AggregateRoot<TodoListProps> {
  protected _id: string;

  static create(create: CreateTodoListProps) {
    const id = randomUUID();
    const props: TodoListProps = { ...create };
    const todoList = new TodoListEntity({ id, props });

    todoList.addEvent(
      new TodoListCreatedDomainEvent({
        aggregateId: todoList.id,
        title: todoList.getProps().title,
        userId: todoList.getProps().userId,
      }),
    );

    return todoList;
  }

  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
