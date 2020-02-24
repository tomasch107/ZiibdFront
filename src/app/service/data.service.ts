import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../DB/employee';
import {Job} from '../DB/job';
import {Department} from '../DB/department';


const api = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(api + 'employees');
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(api + 'employee/' + id);
  }

  updateEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>(api + 'employee', data);
  }

  saveEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>(api + 'employeeInsert', data);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.post<Employee>(api + 'employeeDelete', id);
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(api + 'jobs');
  }

  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(api + 'job/' + id);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(api + 'departments');
  }

  getDepartment(id: string): Observable<Department> {
    return this.http.get<Department>(api + 'department/' + id);
  }

  updateJob(data: Job): Observable<Job> {
    return this.http.post<Job>(api + 'job', data);
  }

  updateDepartment(data: Department): Observable<Department> {
    return this.http.post<Department>(api + 'department', data);
  }
}
