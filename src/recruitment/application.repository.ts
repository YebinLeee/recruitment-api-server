import { CustomRepository } from 'src/db/typeorm-ex.module';
import { Application } from 'src/domain/application.entity';
import { Repository } from 'typeorm';

@CustomRepository(Application)
export class ApplicationRepository extends Repository<Application> {}
