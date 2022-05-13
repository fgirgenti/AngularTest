import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities = this.activityService.getActivities()

  selectActivity(activity: Activity) {
    this.activityService.selectActivity(activity)
  }

  constructor( private activityService: ActivityService) { }

  ngOnInit(): void {
  }

}
