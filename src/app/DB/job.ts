
export class Job {
  jobId: string;
  jobTitle: string;
  minSalary: number;
  maxSalary: number;

  constructor(  jobId: string, jobTitle: string, minSalary: number, maxSalary: number){
      this.jobId = jobId;
      this.jobTitle = jobTitle;
      this.minSalary = minSalary;
      this.maxSalary = maxSalary;
  }
}
