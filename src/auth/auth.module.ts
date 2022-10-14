import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/db/typeorm-ex.decorator';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository]), AuthModule],
  exports: [TypeOrmExModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
