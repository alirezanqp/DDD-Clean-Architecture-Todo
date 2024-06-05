import { DomainEvent, DomainEventProps } from 'src/libs/ddd';
import { Username } from '../value-objects/username.value-object';

export class UserRegisterDomainEvent extends DomainEvent {
  readonly username: Username;

  constructor(props: DomainEventProps<UserRegisterDomainEvent>) {
    super(props);
    this.username = props.username;
  }
}
