import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { UserDTO } from './domain/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  // 로그인
  @Post('/login')
  async signin(
    @Body() userDTO: UserDTO,
    @Res() resp: Response,
  ): Promise<Response> {
    const userInfo = await this.authService.validateUser(userDTO);
    resp.setHeader('Authorization', 'Bearer ' + 'token');
    return resp.json(userInfo);
  }
}
