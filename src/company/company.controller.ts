import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CompanyService } from './company.service';
import { CompanySigninDTO } from './dto/comp-signin.dto';

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
    console.log('jwt 생성 : ', jwt);
    resp.setHeader('Authorization', 'Bearer ' + jwt.accessToken);
    return resp.json(jwt);
  }
}
