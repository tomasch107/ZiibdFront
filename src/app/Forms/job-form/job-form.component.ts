import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { Job } from 'src/app/DB/job';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  public job: Job;
  jobObs: Observable<Job>;

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService) { }

  ngOnInit() {
    this.setEmployeeObs();
    this.setEmployee();
  }

  private setEmployeeObs() {
    this.jobObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getJob(params.get('id')))
    );
  }

  private setEmployee() {
    this.jobObs.subscribe(job => {
      this.job = job;
    });
  }
  onUpdate(data) {
    this.service.updateJob(data).subscribe();
  }

}
