import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { CompanyService } from '../company.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private compService: CompanyService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'SECRET',
    });
  }

  // 토큰 검증
  async validate(payload: string, done: VerifiedCallback): Promise<any> {
    const company = await this.compService.tokenValidateUser(payload);
    if (!company) {
      return done(
        new UnauthorizedException({ message: '존재하지 않는 사용자입니다.' }),
      );
    }
    return done(null, company);
  }
}
