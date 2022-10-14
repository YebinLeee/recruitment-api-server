import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/domain/users.entity';
import { FindOneOptions } from 'typeorm';
import { UserDTO } from './domain/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findByFields(
    options: FindOneOptions<UserDTO>,
  ): Promise<Users | undefined> {
    return await this.userRepository.findOne(options);
  }

  // 로그인
  async validateUser(userDTO: UserDTO): Promise<Users | undefined> {
    const userFind: Users = await this.findByFields({
      where: { email: userDTO.email },
    });

    if (!userFind || userDTO.password != userFind.password) {
      throw new UnauthorizedException('로그인 실패');
    }

    return userFind;
  }
}
