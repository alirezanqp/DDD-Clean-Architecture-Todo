import { AggregateRoot } from 'src/libs/ddd';
import { randomUUID } from 'crypto';

import { CreateTodoItemProps, TodoItemProps } from './todo-item.types';
import { TodoItemCreatedDomainEvent } from './events/todo-item-created.event';
import { Priority } from './value-objects/priority.value-object';
import { TodoItemDeletedDomainEvent } from './events/todo-item-delete.event';

export class TodoItemEntity extends AggregateRoot<TodoItemProps> {
  protected _id: string;

  static create(create: CreateTodoItemProps) {
    const id = randomUUID();
    const props: TodoItemProps = { ...create };
    const todoItem = new TodoItemEntity({ id, props });

    todoItem.addEvent(
      new TodoItemCreatedDomainEvent({
        aggregateId: todoItem.id,
        title: todoItem.getProps().title,
        description: todoItem.getProps().description,
        priority: todoItem.getProps().priority,
      }),
    );

    return todoItem;
  }

  updatePriority(priority: Priority) {
    this.props.priority = priority;
  }

  delete(): void {
    this.addEvent(
      new TodoItemDeletedDomainEvent({
        aggregateId: this.id,
      }),
    );
  }

  public validate(): void {}
}
