import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { USER_REPOSITORY_TOKEN } from './user.di-tokens';
import { MongooseUserRepository } from './infrastructure/persistence/mongoose.user.repository';
import { RegisterUserUseCase } from './application/use-cases/commands/register/register-user.usecase';
import { User, UserSchema } from './infrastructure/persistence/user.schema';
import { UserMapper } from './user.mapper';
import { MongooseModule } from '@nestjs/mongoose';

const repositories: Provider[] = [
  {
    provide: USER_REPOSITORY_TOKEN,
    useClass: MongooseUserRepository,
  },
];

// Use Cases
const commandHandlers = [RegisterUserUseCase];
const queryHandlers = [];

const mappers: Provider[] = [UserMapper];

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [...repositories, ...commandHandlers, ...mappers],
})
export class UserModule {}
