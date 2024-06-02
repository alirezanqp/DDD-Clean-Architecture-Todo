import { ValueObject } from 'src/libs/ddd';

export interface PriorityProps {
  value: string;
}

export class Priority extends ValueObject<PriorityProps> {
  public get value(): string {
    return this.value;
  }

  protected validate(props: PriorityProps): void {
    // validate priority
  }
}
