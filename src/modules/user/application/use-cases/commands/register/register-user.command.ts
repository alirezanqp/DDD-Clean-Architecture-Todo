import { Command, CommandProps } from 'src/libs/ddd';

export class RegisterUserCommand extends Command {
  readonly username: string;
  readonly password: string;

  constructor(props: CommandProps<RegisterUserCommand>) {
    super(props);
    this.username = props.username;
    this.password = props.password;
  }
}
