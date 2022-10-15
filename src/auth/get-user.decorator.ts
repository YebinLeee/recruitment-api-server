import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Users } from 'src/domain/users.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): Users => {
    const req = ctx.switchToHttp().getRequest();
    console.log('companny request : ', req.user);
    return req.user;
  },
);
