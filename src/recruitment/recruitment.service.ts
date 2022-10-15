import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/domain/company.entity';
import { Recruitment } from 'src/domain/recruitment.entity';
import { NewRecruitDTO } from './dto/newRecruit.dto';
import { RecruitDetailDTO } from './dto/recruit-detail.dto';
import { RecruitListDTO } from './dto/recruit-list.dto';
import { RecruitmentRepository } from './recruitment.repository';
import { Application } from 'src/domain/application.entity';
import { ApplicationRepository } from './application.repository';
import { Users } from 'src/domain/users.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { UpdateRecruitDTO } from './dto/updateRecruit.dto';

@Injectable()
export class RecruitmentService {
  constructor(
    @InjectRepository(RecruitmentRepository)
    private recruitRepository: RecruitmentRepository,
    @InjectRepository(ApplicationRepository)
    private applyRepository: ApplicationRepository,
  ) {}

  // 채용 공고 등록
  async createRecruit(
    recruitDTO: NewRecruitDTO,
    company: Company,
  ): Promise<NewRecruitDTO | undefined> {
    const post = this.recruitRepository.create({
      ...recruitDTO,
      companyId: company.id,
      company,
    });
    return await this.recruitRepository.save(post);
  }

  // 채용공고 목록 가져오기
  async getAllRecruits(): Promise<RecruitListDTO[]> {
    const allRecruits: Recruitment[] = await this.recruitRepository.find();
    const recruitList = [];
    for (const recruit of allRecruits) {
      const recruitDto: RecruitListDTO = {
        id: recruit.id,
        companyName: recruit.company.companyName,
        country: recruit.company.country,
        region: recruit.company.region,
        position: recruit.position,
        compensation: recruit.compensation,
        techStack: recruit.techStack,
      };
      recruitList.push(recruitDto);
    }
    return recruitList;
  }

  // 채용 공고 상세보기
  async getRecruitById(recruitId): Promise<RecruitDetailDTO> {
    const recruit = await this.recruitRepository.findOne({
      where: { id: recruitId },
    });

    if (!recruit) {
      throw new NotFoundException(
        `${recruitId}번 채용 공고를 찾지 못했습니다.`,
      );
    }

    // 회사의 다른 채용공고 ID리스트
    const compId: number = recruit.companyId;
    const foundAll: Recruitment[] = await this.recruitRepository.find({
      where: { companyId: compId },
    });
    const idList = [];
    for (const recruit of foundAll) {
      idList.push(recruit['id']);
    }

    const recruitPost: RecruitDetailDTO = {
      id: recruit.id,
      companyName: recruit.company.companyName,
      country: recruit.company.country,
      region: recruit.company.region,
      position: recruit.position,
      compensation: recruit.compensation,
      techStack: recruit.techStack,
      contents: recruit.contents,
      otherRecruitLists: idList,
    };
    return recruitPost;
  }

  // 채용 공고 지원
  async apply(
    recruitId: number,
    userApplied: Users,
  ): Promise<Application | undefined> {
    console.log(recruitId, userApplied);
    const recruitApplied = await this.recruitRepository.findOne({
      where: { id: recruitId },
    });

    return await this.applyRepository.save({
      user: userApplied,
      recruit: recruitApplied,
    });
  }

  // 채용 공고 수정
  async updateRecruit(
    recruitId: number,
    recruitDTO: UpdateRecruitDTO,
    comp: Company,
  ): Promise<NewRecruitDTO> {
    console.log(`${recruitId}번 공고를 찾습니다.`);
    const recruit = await this.recruitRepository.findOne({
      where: { id: recruitId },
    });
    console.log('찾은 공고 정보 : ', recruit, comp);
    if (!recruit) {
      throw new NotFoundException(`${recruitId} 번 공고를 찾을 수 없습니다.`);
    }
    await this.recruitRepository.update(recruitId, recruitDTO);
    return recruit;
  }

  // 채용 공고 삭제
  async deleteRecruit(recruitId: number, comp: Company): Promise<void> {
    const result = await this.recruitRepository.delete({
      id: recruitId,
      company: comp,
    });
    if (result.affected === 0) {
      throw new NotFoundException(
        `${recruitId}번 게시물을 삭제하지 못했습니다.`,
      );
    }
  }
}
