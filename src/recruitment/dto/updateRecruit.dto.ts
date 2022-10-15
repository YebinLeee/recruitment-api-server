import { PartialType } from '@nestjs/mapped-types';
import { NewRecruitDTO } from './newRecruit.dto';

export class UpdateRecruitDTO extends PartialType(NewRecruitDTO) {}
