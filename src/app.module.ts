import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dotenv = require('dotenv');
import { LawyersModel } from './entity/lawyer.entity';
import { config } from './config';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      database: config.database.database,
      password: config.database.password,
      autoLoadEntities: true,
      synchronize: false,
      entities: Object.values(LawyersModel),
    }),
    TypeOrmModule.forFeature([LawyersModel]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
