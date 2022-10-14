export class RecruitDetailDTO {
  id: number;
  companyName: string;
  country: string;
  region: string;
  position: string;
  compensation: number;
  techStack: string;
  contents: string;
  otherRecruitLists: Array<number>;
}
