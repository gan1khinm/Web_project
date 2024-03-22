import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from "./LoggingInterceptor";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserController} from "./user/user.controller";
import {MessageController} from "./message/message.controller";
import {CommentController} from "./comment/comment.controller";
import {MessageService} from "./message/message.service";
import {CommentService} from "./comment/comment.service";
import {UserService} from "./user/user.service";
import {User} from "./user/user.entity";
import {Message} from "./message/message.entity";
import {Comment} from "./comment/comment.entity";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'dpg-cnkcepol5elc73c2cvrg-a.oregon-postgres.render.com',
        port: 5432,
        username: 'database1_1qxn_user',
        password: 'CXhViYHo6I8OfBOcXS6FVf8vW610DePe',
        database: 'database1_1qxn',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Message]),
    TypeOrmModule.forFeature([Comment])
  ],
  controllers: [AppController, UserController, MessageController, CommentController],
  providers: [AppService,
    UserService,
    MessageService,
    CommentService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],
})

export class AppModule {}