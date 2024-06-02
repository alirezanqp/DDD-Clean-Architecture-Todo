import { ValueObject } from 'src/libs/ddd';

export interface DescriptionProps {
  value: string;
}

export class Description extends ValueObject<DescriptionProps> {
  static INVALID_LENGTH =
    'Description range must be between 3 and 100 characters';
  static INVALID_TYPE = 'Description must be a string';

  protected validate(props: DescriptionProps): void {
    if (!props.value) {
      throw new Error(Description.INVALID_LENGTH);
    }

    if (props.value.length < 3 || props.value.length > 100) {
      throw new Error(Description.INVALID_LENGTH);
    }

    if (typeof props.value !== 'string') {
      throw new Error(Description.INVALID_TYPE);
    }

    this.props.value = props.value; // set props
  }
}
