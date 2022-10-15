import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/domain/users.entity';
import { FindOneOptions } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async findByFields(
    options: FindOneOptions<UserDTO>,
  ): Promise<Users | undefined> {
    return await this.userRepository.findOne(options);
  }

  // 로그인
  async validateUser(
    userDTO: UserDTO,
  ): Promise<{ accessToken: string } | undefined> {
    const userFind: Users = await this.findByFields({
      where: { email: userDTO.email },
    });

    if (!userFind || userDTO.password != userFind.password) {
      throw new UnauthorizedException('유저 로그인 실패');
    }

    const payload = userFind.email;
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // 유저의 토큰 검증
  async tokenValidateUser(userEmail: string): Promise<Users | undefined> {
    console.log('email로 검증합니다.');
    return await this.findByFields({
      where: { email: userEmail },
    });
  }
}
