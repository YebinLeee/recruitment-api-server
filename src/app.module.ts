import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ormConfig } from './config/orm.config';
import { CompanyModule } from './company/company.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { UserRepository } from './auth/user.repository';
import { TypeOrmExModule } from './db/typeorm-ex.decorator';
import { CompanyRepository } from './company/company.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    TypeOrmExModule.forCustomRepository([UserRepository]),
    TypeOrmExModule.forCustomRepository([CompanyRepository]),
    AuthModule,
    CompanyModule,
    RecruitmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
