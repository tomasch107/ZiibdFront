import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navBar/navbar/navbar.component';
import { EmployeeFormComponent } from './Forms/employee-form/employee-form.component'
import { EmployeeInsertComponent } from './Forms/employee-insert/employee-insert.component'
import { JobFormComponent } from './Forms/job-form/job-form.component';
import { DepartmentFormComponent } from './Forms/department-form/department-form.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeFormComponent
  },
  {
    path: 'addEmployee',
    component: EmployeeInsertComponent
  },
  { path: 'job/:id',
  component: JobFormComponent
  },
  { path: 'department/:id',
  component: DepartmentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
