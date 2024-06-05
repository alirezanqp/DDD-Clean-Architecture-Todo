import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateTodoItemCommand } from '../application/use-cases/commands/create-todo-item/create-todo-item.command';
import { ApiErrorResponse, IdResponse } from 'src/libs/api';
import { CreateTodoItemRequestDto } from './dto/create-todo-item.request.dto';
import { Result, match } from 'oxide.ts';
import { AggregateID } from 'src/libs/ddd';
import { log } from 'util';

@Controller('todo-items')
export class TodoItemHttpController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a todo item' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiErrorResponse,
  })
  async createTodoItem(@Body() dto: CreateTodoItemRequestDto) {
    const command = new CreateTodoItemCommand({
      title: dto.title,
      description: dto.description,
      priority: dto.priority,
    });

    const result: Result<AggregateID, any> = await this.commandBus.execute(
      command,
    );

    console.log(result);

    return match(result, {
      Ok: (id: string) => new IdResponse(id),
      Err: (error: Error) => {
        throw error;
      },
    });
  }
}
