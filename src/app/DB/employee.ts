import { Department } from './department';

export class Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  jobId: string;
  salary: string;
  commissionPct: string;
  managerId: string;
  phoneNumber: string[];
  departmentsByDepartmentId: Department;

  constructor(employeeId:number, firstName:string, lastName:string, email:string, jobId: string, salary: string, commissionPct: string
    , managerId: string, phoneNumber: string[], departmentsByDepartmentId: Department) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.jobId = jobId;
    this.salary = salary;
    this.commissionPct = commissionPct;
    this.managerId = managerId;
    this.phoneNumber = phoneNumber;
    this.departmentsByDepartmentId = departmentsByDepartmentId;
  }
}
