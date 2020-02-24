import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
import { Employee } from 'src/app/DB/employee';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})

export class EmployeesListComponent implements OnInit {

  employees = new Array<Employee>();

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getEmployees().subscribe(response =>
      {
        this.employees = response.map(item =>
        {
          return new Employee(
              item.employeeId,
              item.firstName,
              item.lastName,
              item.email,
              item.jobId,
              item.salary,
              item.commissionPct,
              item.managerId,
              item.phoneNumber,
              item.departmentsByDepartmentId,
          );
        });
      });
  }
  resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  onDeleteClick(id: number){
    this.dataService.deleteEmployee(id).subscribe( (data) =>{
      console.log(data);
      this.ngOnInit();
    }),
    err => {
      console.log("Error");
    }
  }
}
