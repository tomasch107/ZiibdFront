import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';
import { Department } from 'src/app/DB/department';


@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {


  departments = new Array<Department>();

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getDepartments().subscribe(response =>
      {
        this.departments = response.map(item =>
        {
          return new Department(
            item.departmentId,
            item.departmentName
          );
        });
      });
  }
}
