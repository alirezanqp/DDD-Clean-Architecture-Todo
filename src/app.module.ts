import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RequestContextModule } from 'nestjs-request-context';
import { CqrsModule } from '@nestjs/cqrs';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { TodoItemModule } from './modules/todo-items/todo-item.module';
import { ContextInterceptor } from './libs/application/context/ContextInterceptor';
import { ExceptionInterceptor } from './libs/application/interceptors/exception.interceptor';
import { databaseConfig } from './configs/database.config';
import { UserModule } from './modules/user/user.module';

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ExceptionInterceptor,
  },
];

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.url),
    EventEmitterModule.forRoot(),
    RequestContextModule,
    CqrsModule,
    TodoItemModule,
    UserModule,
  ],
  providers: [...interceptors],
})
export class AppModule {}
