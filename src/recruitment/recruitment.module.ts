import { Module } from '@nestjs/common';
import { UserRepository } from 'src/auth/user.repository';
import { CompanyModule } from 'src/company/company.module';
import { TypeOrmExModule } from 'src/db/typeorm-ex.decorator';
import { ApplicationRepository } from './application.repository';
import { RecruitmentController } from './recruitment.controller';
import { RecruitmentRepository } from './recruitment.repository';
import { RecruitmentService } from './recruitment.service';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([RecruitmentRepository]),
    TypeOrmExModule.forCustomRepository([ApplicationRepository]),
    TypeOrmExModule.forCustomRepository([UserRepository]),
    CompanyModule,
  ],
  controllers: [RecruitmentController],
  providers: [RecruitmentService],
})
export class RecruitmentModule {}
