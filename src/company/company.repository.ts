import { CustomRepository } from 'src/db/typeorm-ex.module';
import { Company } from 'src/domain/company.entity';
import { Repository } from 'typeorm';

@CustomRepository(Company)
export class CompanyRepository extends Repository<Company> {}
