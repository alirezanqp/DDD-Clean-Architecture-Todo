import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseTodoItemRepository } from './infrastructure/persistence/mongoose.todo-item.repository';
import { TODO_ITEM_REPOSITORY } from './todo-item.di-tokens';

const repositories: Provider[] = [
  {
    provide: TODO_ITEM_REPOSITORY,
    useValue: MongooseTodoItemRepository,
  },
];

const commandHandlers = [];
const queryHandlers = [];

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [...repositories],
})
export class TodoItemModule {}
