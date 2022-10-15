import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Get, Res } from '@nestjs/common/decorators';
import { Response } from 'express';
import { Company } from 'src/domain/company.entity';
import { CompanyService } from './company.service';
import { CompanySigninDTO } from './dto/comp-signin.dto';
import { GetCompany } from './get-company.decorator';
import { CompAuthGuard } from './security/compAuth.guard';

@Controller('company')
export class CompanyController {
  constructor(private compService: CompanyService) {
    this.compService = compService;
  }

  // 회사 유저 로그인
  @Post('login')
  async signin(
    @Body() compDTO: CompanySigninDTO,
    @Res() resp: Response,
  ): Promise<Response> {
    const jwt = await this.compService.validateCompany(compDTO);
    resp.setHeader('Authorization', 'Bearer ' + jwt.accessToken);
    return resp.json(jwt);
  }

  // 유저 정보
  @Get('user')
  @UseGuards(CompAuthGuard)
  async getCompany(@GetCompany() comp: Company): Promise<Company> {
    return comp;
  }
}
