import { Module } from '@nestjs/common';
import { CompanyModule } from 'src/company/company.module';
import { TypeOrmExModule } from 'src/db/typeorm-ex.decorator';
import { RecruitmentController } from './recruitment.controller';
import { RecruitmentRepository } from './recruitment.repository';
import { RecruitmentService } from './recruitment.service';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([RecruitmentRepository]),
    CompanyModule,
  ],
  controllers: [RecruitmentController],
  providers: [RecruitmentService],
})
export class RecruitmentModule {}
