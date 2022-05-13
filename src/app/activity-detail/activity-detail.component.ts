import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  activity$!: Observable<Activity>;
  
  constructor( private activityService: ActivityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activity$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.activityService.getSelected(params.get('key')))
    )    
  }
  
}
