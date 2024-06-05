import { Injectable } from '@nestjs/common';
import { Mapper } from 'src/libs/ddd';
import { UserEntity } from './domain/user.entity';
import { User as UserModel } from './infrastructure/persistence/user.schema';
import { UserResponseDto } from './interface/dto/user.response.dto';
import { Username } from './domain/value-objects/username.value-object';
import { Password } from './domain/value-objects/password.value-object';

@Injectable()
export class UserMapper
  implements Mapper<UserEntity, UserModel, UserResponseDto>
{
  toPersistence(entity: UserEntity): UserModel {
    return {
      _id: entity.id,
      username: entity.getProps().username.unpack().value,
      password: entity.getProps().password.unpack().value,
      createdAt: entity.getProps().createdAt,
      updatedAt: entity.getProps().updatedAt,
    };
  }

  toDomain(record: any): UserEntity {
    const entity = new UserEntity({
      id: record._id,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      props: {
        username: new Username({ value: record.username }),
        password: new Password({ value: record.password }),
      },
    });

    return entity;
  }

  toResponse(entity: UserEntity): UserResponseDto {
    const props = entity.getProps();
    const response = new UserResponseDto(entity);

    response.username = props.username.unpack().value;

    return response;
  }
}
