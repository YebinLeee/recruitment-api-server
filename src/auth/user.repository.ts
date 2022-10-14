import { CustomRepository } from 'src/db/typeorm-ex.module';
import { Users } from 'src/domain/users.entity';
import { Repository } from 'typeorm';

@CustomRepository(Users)
export class UserRepository extends Repository<Users> {}
