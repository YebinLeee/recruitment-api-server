import { CustomRepository } from 'src/db/typeorm-ex.module';
import { Recruitment } from 'src/domain/recruitment.entity';
import { Repository } from 'typeorm';

@CustomRepository(Recruitment)
export class RecruitmentRepository extends Repository<Recruitment> {}
