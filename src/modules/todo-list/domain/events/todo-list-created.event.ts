import { AggregateID, DomainEvent, DomainEventProps } from 'src/libs/ddd';
import { Title } from '../value-objects/title.value-object';

export class TodoListCreatedDomainEvent extends DomainEvent {
  readonly title: Title;
  readonly userId: AggregateID;

  constructor(props: DomainEventProps<TodoListCreatedDomainEvent>) {
    super(props);
    this.title = props.title;
    this.userId = props.userId;
  }
}
