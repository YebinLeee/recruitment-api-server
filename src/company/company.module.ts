import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmExModule } from 'src/db/typeorm-ex.decorator';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './company.repository';
import { CompanyService } from './company.service';
import { CompJwtStrategy } from './security/passport.strategy';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([CompanyRepository]),
    JwtModule.register({
      secret: 'SECRET',
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    CompanyModule,
  ],
  exports: [TypeOrmExModule, PassportModule],
  controllers: [CompanyController],
  providers: [CompanyService, JwtModule, CompJwtStrategy],
})
export class CompanyModule {}
