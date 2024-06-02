import { DomainEvent, DomainEventProps } from 'src/libs/ddd';

import { Title } from '../value-objects/title.value-object';
import { Description } from '../value-objects/description.value-object';
import { Priority } from '../value-objects/priority.value-object';

export class TodoItemCreatedDomainEvent extends DomainEvent {
  readonly title: Title;
  readonly description: Description;
  readonly priority: Priority;

  constructor(props: DomainEventProps<TodoItemCreatedDomainEvent>) {
    super(props);
    this.title = props.title;
    this.description = props.description;
    this.priority = props.priority;
  }
}
