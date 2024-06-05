import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { RegisterUserCommand } from './register-user.command';
import { USER_REPOSITORY_TOKEN } from 'src/modules/user/user.di-tokens';
import { UserRepository } from '../../../repository/user.repository.interface';
import { UserEntity } from 'src/modules/user/domain/user.entity';
import { Username } from 'src/modules/user/domain/value-objects/username.value-object';
import { Password } from 'src/modules/user/domain/value-objects/password.value-object';
import { Ok } from 'oxide.ts';

@CommandHandler(RegisterUserCommand)
export class RegisterUserUseCase
  implements ICommandHandler<RegisterUserCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(command: RegisterUserCommand): Promise<any> {
    const exists = this.userRepository.findByUsername(command.username);

    // TODO: use domain exception instead of nest bad request exception
    if (exists) {
      throw new BadRequestException('Username already exists');
    }

    const hashedPassword = await this.hashPassword(command.password);
    const user = UserEntity.register({
      username: new Username({ value: command.username }),
      password: new Password({ value: hashedPassword }),
    });

    try {
      await this.userRepository.create(user);
      return Ok(user.id);
    } catch (error) {}
  }

  private async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }
}
