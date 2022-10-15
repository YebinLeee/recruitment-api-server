import { Body, Controller, Post, Res, Get, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Users } from 'src/domain/users.entity';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';
import { GetUser } from './get-user.decorator';
import { UserAuthGuard } from './security/userAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  // 로그인
  @Post('login')
  async signin(
    @Body() userDTO: UserDTO,
    @Res() resp: Response,
  ): Promise<Response> {
    const jwt = await this.authService.validateUser(userDTO);
    resp.setHeader('Authorization', 'Bearer ' + jwt.accessToken);
    return resp.json(jwt);
  }

  // 유저 정보
  @Get('user')
  @UseGuards(UserAuthGuard)
  async getUser(@GetUser() user: Users): Promise<Users> {
    return user;
  }
}
