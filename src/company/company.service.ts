import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/domain/company.entity';
import { FindOneOptions } from 'typeorm';
import { CompanyRepository } from './company.repository';
import { CompanySigninDTO } from './dto/comp-signin.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyRepository)
    private compRepository: CompanyRepository,
    private jwtService: JwtService,
  ) {}

  async findByFields(
    options: FindOneOptions<CompanySigninDTO>,
  ): Promise<Company | undefined> {
    return await this.compRepository.findOne(options);
  }

  // 로그인
  async validateCompany(
    compDTO: CompanySigninDTO,
  ): Promise<{ accessToken: string } | undefined> {
    const comp: Company = await this.findByFields({
      where: { companyName: compDTO.companyName },
    });

    if (!comp) {
      throw new UnauthorizedException('회사 로그인 실패');
    }

    const payload = comp.companyName;
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // 로그아웃
  async logOut() {
    return 'Authentication=; HttpOnly; Path=/; Max-Age=0';
  }

  // 회사 유저의 토큰 검증
  async tokenValidateUser(cName: string): Promise<Company | undefined> {
    return await this.findByFields({
      where: { companyName: cName },
    });
  }
}
