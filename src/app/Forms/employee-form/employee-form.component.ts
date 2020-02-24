import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import { Employee } from 'src/app/DB/employee';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employee: Employee;
  employeeObs: Observable<Employee>;

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService) { }

  ngOnInit() {
    this.setEmployeeObs();
    this.setEmployee();
  }

  private setEmployeeObs() {
    this.employeeObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEmployee(params.get('id')))
    );
  }

  private setEmployee() {
    this.employeeObs.subscribe(employee => {
      this.employee = employee;
    });
  }
  onUpdate(data) {
    this.service.updateEmployee(data).subscribe( (data) =>{
      console.log(data);
      this.ngOnInit();
    }),
    err => {
      console.log("Error");
    }
  }

}
