import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmExModule } from 'src/db/typeorm-ex.decorator';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthJwtStrategy } from './security/passport.strategy';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository]),
    JwtModule.register({
      secret: 'SECRET',
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    AuthModule,
  ],
  exports: [TypeOrmExModule],
  controllers: [AuthController],
  providers: [AuthService, JwtModule, AuthJwtStrategy],
})
export class AuthModule {}
