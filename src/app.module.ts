/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ormConfig } from './config/orm.config';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory : ormConfig }),
    AuthModule,
    CompanyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
