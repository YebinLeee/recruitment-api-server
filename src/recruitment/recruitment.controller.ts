import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Delete, Get, Param, Patch } from '@nestjs/common/decorators';
import { Request } from 'express';
import { GetUser } from 'src/auth/get-user.decorator';
import { UserAuthGuard } from 'src/auth/security/userAuth.guard';
import { GetCompany } from 'src/company/get-company.decorator';
import { CompAuthGuard } from 'src/company/security/compAuth.guard';
import { Application } from 'src/domain/application.entity';
import { Company } from 'src/domain/company.entity';
import { Users } from 'src/domain/users.entity';
import { NewRecruitDTO } from './dto/newRecruit.dto';
import { RecruitDetailDTO } from './dto/recruit-detail.dto';
import { RecruitListDTO } from './dto/recruit-list.dto';
import { UpdateRecruitDTO } from './dto/updateRecruit.dto';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(private recruitService: RecruitmentService) {}

  // 채용 공고 등록
  @Post('create')
  @UseGuards(CompAuthGuard)
  async newRecruit(
    @Req() req: Request,
    @Body() recruitDTO: NewRecruitDTO,
    @GetCompany() company: Company,
  ): Promise<NewRecruitDTO> {
    return await this.recruitService.createRecruit(recruitDTO, company);
  }

  // 채용 공고 목록
  @Get('recruitment-lists')
  async getAllRecruits(): Promise<RecruitListDTO[]> {
    return this.recruitService.getAllRecruits();
  }

  // 채용 공고 상세보기
  @Get(':recruitId')
  getRecruitDetail(
    @Param('recruitId') recruitId: number,
  ): Promise<RecruitDetailDTO> {
    return this.recruitService.getRecruitById(recruitId);
  }

  // 채용 공고 삭제하기
  @Delete(':recruitId')
  @UseGuards(CompAuthGuard)
  deleteRecruit(
    @Param('recruitId') recruitId: number,
    @GetCompany() comp: Company,
  ): Promise<void> {
    console.log(
      `유저 ${comp.companyName} 이 ID ${recruitId}번 공고를 삭제합니다.`,
    );
    return this.recruitService.deleteRecruit(recruitId, comp);
  }

  // 채용 공고 수정하기
  @Patch(':recruitId')
  @UseGuards(CompAuthGuard)
  updateRecruit(
    @Param('recruitId') recruitId: number,
    @Body() recruitDTO: UpdateRecruitDTO,
    @GetCompany() comp: Company,
  ): Promise<NewRecruitDTO> {
    console.log(`${recruitId}번 공고를 찾습니다.`);
    return this.recruitService.updateRecruit(recruitId, recruitDTO, comp);
  }

  // 해당 공고에 지원하기
  @Post(':recruitId/apply')
  @UseGuards(UserAuthGuard)
  apply(
    @Param('recruitId') recruitId: number,
    @GetUser() user: Users,
  ): Promise<Application> {
    console.log('사용자 : ', user);
    return this.recruitService.apply(recruitId, user);
  }
}
