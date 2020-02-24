import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';
import { Job } from 'src/app/DB/job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  jobs = new Array<Job>();

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getJobs().subscribe(response =>
      {
        this.jobs = response.map(item =>
        {
          return new Job(
            item.jobId,
            item.jobTitle,
            item.maxSalary,
            item.minSalary
          );
        });
      });
  }


}
