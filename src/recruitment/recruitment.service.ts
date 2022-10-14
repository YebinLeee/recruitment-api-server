import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/domain/company.entity';
import { Recruitment } from 'src/domain/recruitment.entity';
import { NewRecruitDTO } from './dto/newRecruit.dto';
import { RecruitDetailDTO } from './dto/recruit-detail.dto';
import { RecruitListDTO } from './dto/recruit-list.dto';
import { RecruitmentRepository } from './recruitment.repository';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class RecruitmentService {
  constructor(
    @InjectRepository(RecruitmentRepository)
    private recruitRepository: RecruitmentRepository,
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
  async getRecruitById(recruit_id): Promise<RecruitDetailDTO> {
    const recruit = await this.recruitRepository.findOne({
      where: { id: recruit_id },
    });

    if (!recruit) {
      throw new NotFoundException(
        `${recruit_id}번 채용 공고를 찾지 못했습니다.`,
      );
    }

    // 회사의 다른 채용공고 ID리스트
    const compId: number = recruit.companyId;
    console.log(`company id : ${compId}`);
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
}
