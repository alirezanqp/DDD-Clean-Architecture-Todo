import { ValueObject } from 'src/libs/ddd';

export interface TitleProps {
  value: string;
}

export class Title extends ValueObject<TitleProps> {
  static INVALID_LENGTH = 'Title range must be between 3 and 100 characters';
  static INVALID_TYPE = 'Title must be a string';

  protected validate(props: TitleProps): void {
    if (!props.value) {
      throw new Error(Title.INVALID_LENGTH);
    }

    if (props.value.length < 3 || props.value.length > 100) {
      throw new Error(Title.INVALID_LENGTH);
    }

    if (typeof props.value !== 'string') {
      throw new Error(Title.INVALID_TYPE);
    }

    this.props.value = props.value; // set props
  }
}
