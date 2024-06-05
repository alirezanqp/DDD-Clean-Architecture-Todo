import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User as UserModel } from './user.schema';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../application/repository/user.repository.interface';
import { UserMapper } from '../../user.mapper';

@Injectable()
export class MongooseTodoItemRepository implements UserRepository {
  constructor(
    @InjectModel(UserModel.name)
    private todoItemModel: Model<UserModel>,
    private mapper: UserMapper,
  ) {}

  async findByUsername(username: string): Promise<UserEntity> {
    return this.mapper.toDomain(await this.todoItemModel.findOne({ username }));
  }

  async create(entity: UserEntity): Promise<void> {
    const record = this.mapper.toPersistence(entity);
    await this.todoItemModel.create(record);
  }
}
