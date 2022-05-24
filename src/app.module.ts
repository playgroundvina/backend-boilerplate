import { TasksModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { OffersModule } from './modules/offers/offers.module';

@Module({
  imports: [
    // Config .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Cronjob
    ScheduleModule.forRoot(),
    TasksModule,

    // Config typeorm
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.MONGO_HOST,
      port: +process.env.MONGO_PORT,
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      database: process.env.MONGO_DATABASE,
      autoLoadEntities: true,
      entities: [User],
      extra: { "authSource": "admin" },
    }),

    UserModule,

    OffersModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {
  constructor(private connection: Connection) {
  }
}
