import { randomUUID } from 'crypto';
import { AggregateRoot } from 'src/libs/ddd';

import { CreateUserProps, UserProps } from './user.types';
import { UserRegisterDomainEvent } from './events/user-register.event';

export class UserEntity extends AggregateRoot<UserProps> {
  protected _id: string;

  static register(create: CreateUserProps): UserEntity {
    const props: UserProps = { ...create };
    const user = new UserEntity({
      props,
      id: randomUUID(),
    });

    user.addEvent(
      new UserRegisterDomainEvent({
        aggregateId: user.id,
        username: user.getProps().username,
      }),
    );

    return user;
  }

  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
