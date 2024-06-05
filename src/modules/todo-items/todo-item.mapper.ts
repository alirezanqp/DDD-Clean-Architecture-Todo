import { Injectable } from '@nestjs/common';
import { Mapper } from 'src/libs/ddd';

import { TodoItemEntity } from './domain/todo-item.entity';
import { TodoItem as TodoItemModel } from './infrastructure/persistence/todo-item.schema';
import { TodoItemResponseDto } from './interface/dto/todo-item.response.dto';
import { Title } from './domain/value-objects/title.value-object';
import { Description } from './domain/value-objects/description.value-object';
import { Priority } from './domain/value-objects/priority.value-object';

@Injectable()
export class TodoItemMapper
  implements Mapper<TodoItemEntity, TodoItemModel, TodoItemResponseDto>
{
  toPersistence(entity: TodoItemEntity): TodoItemModel {
    return {
      _id: entity.id,
      title: entity.getProps().title.unpack().value,
      description: entity.getProps().description.unpack().value,
      priority: entity.getProps().priority.unpack().value,
      createdAt: entity.getProps().createdAt,
      updatedAt: entity.getProps().updatedAt,
    };
  }

  toDomain(record: any): TodoItemEntity {
    const entity = new TodoItemEntity({
      id: record._id,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      props: {
        title: new Title({ value: record.title }),
        description: new Description({ value: record.description }),
        priority: new Priority({ value: record.priority }),
      },
    });

    return entity;
  }

  toResponse(entity: TodoItemEntity): TodoItemResponseDto {
    const props = entity.getProps();
    const response = new TodoItemResponseDto(entity);

    response.title = props.title.unpack().value;
    response.description = props.description.unpack().value;
    response.priority = props.priority.unpack().value;

    return response;
  }
}
