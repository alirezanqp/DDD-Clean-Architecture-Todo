import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseTodoItemRepository } from './infrastructure/persistence/mongoose.todo-item.repository';
import { TODO_ITEM_REPOSITORY } from './todo-item.di-tokens';
import { CreateTodoItemUseCase } from './application/use-cases/commands/create-todo-item/create-todo-item.usecase';
import { TodoItemHttpController } from './interface/todo-item.http.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TodoItem,
  TodoItemSchema,
} from './infrastructure/persistence/todo-item.schema';
import { TodoItemMapper } from './todo-item.mapper';

const repositories: Provider[] = [
  {
    provide: TODO_ITEM_REPOSITORY,
    useClass: MongooseTodoItemRepository,
  },
];

// Use Cases
const commandHandlers = [CreateTodoItemUseCase];
const queryHandlers = [];

const mappers: Provider[] = [TodoItemMapper];

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: TodoItem.name, schema: TodoItemSchema },
    ]),
  ],
  controllers: [TodoItemHttpController],
  providers: [...repositories, ...commandHandlers, ...mappers],
})
export class TodoItemModule {}
