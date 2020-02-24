import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { Department } from 'src/app/DB/department';
@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {
  public department: Department;
  departmentObs: Observable<Department>;

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService) { }

  ngOnInit() {
    this.setEmployeeObs();
    this.setEmployee();
  }

  private setEmployeeObs() {
    this.departmentObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getDepartment(params.get('id')))
    );
  }

  private setEmployee() {
    this.departmentObs.subscribe(department => {
      this.department = department;
    });
  }
  onUpdate(data) {
    this.service.updateDepartment(data).subscribe();
  }
}
