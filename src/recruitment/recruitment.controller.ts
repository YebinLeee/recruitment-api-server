import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { Request } from 'express';
import { GetCompany } from 'src/company/get-company.decorator';
import { CompAuthGuard } from 'src/company/security/compAuth.guard';
import { Company } from 'src/domain/company.entity';
import { NewRecruitDTO } from './dto/newRecruit.dto';
import { RecruitDetailDTO } from './dto/recruit-detail.dto';
import { RecruitListDTO } from './dto/recruit-list.dto';
import { RecruitmentService } from './recruitment.service';

@UseGuards(CompAuthGuard)
@Controller('recruitment')
export class RecruitmentController {
  constructor(private recruitService: RecruitmentService) {}

  // 채용 공고 등록
  @Post('create')
  async newRecruit(
    @Req() req: Request,
    @Body() recruitDTO: NewRecruitDTO,
    @GetCompany() company: Company,
  ): Promise<NewRecruitDTO> {
    console.log('현재 로그인된 회사 : ', company);
    return await this.recruitService.createRecruit(recruitDTO, company);
  }

  // 채용 공고 목록
  @Get('recruitment-lists')
  async getAllRecruits(): Promise<RecruitListDTO[]> {
    return this.recruitService.getAllRecruits();
  }

  // 채용 공고 상세보기
  @Get(':recruit_id')
  getRecruitDetail(
    @Param('recruit_id') recruit_id: number,
  ): Promise<RecruitDetailDTO> {
    return this.recruitService.getRecruitById(recruit_id);
  }
}
