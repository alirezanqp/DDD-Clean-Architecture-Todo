import { Command, CommandProps } from 'src/libs/ddd';

export class CreateTodoItemCommand extends Command {
  readonly title: string;
  readonly description: string;
  readonly priority: string;

  constructor(props: CommandProps<CreateTodoItemCommand>) {
    super(props);
    this.title = props.title;
    this.description = props.description;
    this.priority = props.priority;
  }
}
