/* eslint-disable prettier/prettier */
import { CustomRepository } from "src/db/typeorm-ex.module";
import { Applicants } from "src/domain/applicants.entity";
import { Repository } from "typeorm";

@CustomRepository(Applicants)
export class ApplicantRepository extends Repository<Applicants>{}