import { ValueObject } from 'src/libs/ddd';

export interface UsernameProps {
  value: string;
}

export class Username extends ValueObject<UsernameProps> {
  static INVALID_LENGTH = 'Username range must be between 3 and 100 characters';
  static INVALID_TYPE = 'Username must be a string';

  protected validate(props: UsernameProps): void {
    if (!props.value) {
      throw new Error(Username.INVALID_LENGTH);
    }

    if (props.value.length < 3 || props.value.length > 100) {
      throw new Error(Username.INVALID_LENGTH);
    }

    if (typeof props.value !== 'string') {
      throw new Error(Username.INVALID_TYPE);
    }
  }
}
