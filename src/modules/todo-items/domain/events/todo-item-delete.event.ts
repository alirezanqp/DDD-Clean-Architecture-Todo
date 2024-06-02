import { DomainEvent, DomainEventProps } from 'src/libs/ddd';

export class TodoItemDeletedDomainEvent extends DomainEvent {
  constructor(props: DomainEventProps<TodoItemDeletedDomainEvent>) {
    super(props);
  }
}
