import { ValueObject } from 'src/libs/ddd';

export interface PasswordProps {
  value: string;
}

export class Password extends ValueObject<PasswordProps> {
  static INVALID_LENGTH = 'Password range must be between 8 and 100 characters';
  static INVALID_TYPE = 'Password must be a string';

  protected validate(props: PasswordProps): void {
    if (!props.value) {
      throw new Error(Password.INVALID_LENGTH);
    }

    if (props.value.length < 8 || props.value.length > 100) {
      throw new Error(Password.INVALID_LENGTH);
    }

    if (typeof props.value !== 'string') {
      throw new Error(Password.INVALID_TYPE);
    }
  }
}
