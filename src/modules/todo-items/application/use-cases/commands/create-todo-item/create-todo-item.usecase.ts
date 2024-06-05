import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';

import { CreateTodoItemCommand } from './create-todo-item.command';
import { TodoItemRepository } from '../../../repository/todo-item.repository.interface';
import { TODO_ITEM_REPOSITORY } from 'src/modules/todo-items/todo-item.di-tokens';
import { Title } from 'src/modules/todo-items/domain/value-objects/title.value-object';
import { Description } from 'src/modules/todo-items/domain/value-objects/description.value-object';
import { Priority } from 'src/modules/todo-items/domain/value-objects/priority.value-object';
import { TodoItemEntity } from 'src/modules/todo-items/domain/todo-item.entity';
import { Ok } from 'oxide.ts';

@CommandHandler(CreateTodoItemCommand)
export class CreateTodoItemUseCase
  implements ICommandHandler<CreateTodoItemCommand>
{
  constructor(
    @Inject(TODO_ITEM_REPOSITORY)
    private readonly repository: TodoItemRepository,
  ) {}

  async execute(command: CreateTodoItemCommand): Promise<any> {
    const { title, description, priority } = command;

    const todoItem = TodoItemEntity.create({
      title: new Title({ value: title }),
      description: new Description({ value: description }),
      priority: new Priority({ value: priority }),
    });

    try {
      await this.repository.create(todoItem);
      return Ok(todoItem.id);
    } catch (error) {
      throw error;
    }
  }
}
