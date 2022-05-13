import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities = this.activityService.getActivities()

  selectActivity(key: string) {
    this.activityService.selectActivity(key);
  }

  constructor( private activityService: ActivityService, private router: Router) { }

  ngOnInit(): void {
  }

}
