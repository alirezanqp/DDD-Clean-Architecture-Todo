import { Username } from './value-objects/username.value-object';
import { Password } from './value-objects/password.value-object';

export interface UserProps {
  username: Username;
  password: Password;
}

export interface CreateUserProps {
  username: Username;
  password: Password;
}
