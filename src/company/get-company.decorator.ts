import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Company } from 'src/domain/company.entity';

export const GetCompany = createParamDecorator(
  (data, ctx: ExecutionContext): Company => {
    const req = ctx.switchToHttp().getRequest();
    console.log('companny request : ', req.user);
    return req.user;
  },
);
