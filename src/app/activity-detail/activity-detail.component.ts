import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity: Activity = this.activityService.getSelected()
  
  constructor( private activityService: ActivityService) { }

  ngOnInit(): void {
  }
  
}
