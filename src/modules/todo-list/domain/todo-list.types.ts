import { AggregateID } from 'src/libs/ddd';
import { Title } from './value-objects/title.value-object';

export interface TodoListProps {
  userId: AggregateID;
  title: Title;
}

export interface CreateTodoListProps {
  userId: AggregateID;
  title: Title;
}
