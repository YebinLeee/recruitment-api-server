import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'SECRET',
    });
  }

  // 토큰 검증
  async validate(payload: string, done: VerifiedCallback): Promise<any> {
    const user = await this.authService.tokenValidateUser(payload);
    if (!user) {
      return done(new UnauthorizedException({ message: '유저 로그인 필요' }));
    }
    return done(null, user);
  }
}
