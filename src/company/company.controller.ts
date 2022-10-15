import { Body, Controller, Post } from '@nestjs/common';
import { Get, Req, Res, UseGuards } from '@nestjs/common/decorators';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { CompanyService } from './company.service';
import { CompanySigninDTO } from './dto/comp-signin.dto';
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

  // 로그인 유저 정보 확인하기
  @Get('user')
  @UseGuards(AuthGuard())
  getInfo(@Req() req: Request): any {
    const comp: any = req;
    if (!comp) {
      throw new UnauthorizedException('회사 유저 로그인 필요');
    }
    return comp;
  }
}
