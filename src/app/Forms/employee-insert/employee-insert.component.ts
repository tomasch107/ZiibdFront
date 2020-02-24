import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import { Employee } from 'src/app/DB/employee';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { Department } from 'src/app/DB/department';

@Component({
  selector: 'app-employee-insert',
  templateUrl: './employee-insert.component.html',
  styleUrls: ['./employee-insert.component.scss']
})
export class EmployeeInsertComponent implements OnInit {
  public employee: Employee = new Employee( null,'','','','AD_PRES','','','',[],new Department(10, "Administrationn"));

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService) { }

  ngOnInit() {
  }

  onInsert(data) {
    this.service.saveEmployee(data).subscribe();
    console.log(data);
  }
}
