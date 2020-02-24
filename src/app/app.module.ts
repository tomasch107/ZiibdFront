import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navBar/navbar/navbar.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFormComponent } from './Forms/employee-form/employee-form.component';
import { EmployeeInsertComponent } from './Forms/employee-insert/employee-insert.component';
import { JobsListComponent } from './list/jobs-list/jobs-list.component';
import { DepartmentsListComponent } from './list/departments-list/departments-list.component';
import { JobFormComponent } from './Forms/job-form/job-form.component';
import { DepartmentFormComponent } from './Forms/department-form/department-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesListComponent,
    EmployeeFormComponent,
    EmployeeInsertComponent,
    JobsListComponent,
    DepartmentsListComponent,
    JobFormComponent,
    DepartmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
