import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { CompanyService } from '../company.service';

@Injectable()
export class CompJwtStrategy extends PassportStrategy(Strategy, 'jwt-company') {
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
        new UnauthorizedException({ message: '회사 유저 로그인 필요' }),
      );
    }
    return done(null, company);
  }
}
