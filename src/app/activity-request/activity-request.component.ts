import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-request',
  templateUrl: './activity-request.component.html',
  styleUrls: ['./activity-request.component.css']
})
export class ActivityRequestComponent implements OnInit {

  activityForm = new FormGroup({
    type: new FormControl(''),
    participants: new FormControl(''),
    price: new FormControl('')
  });

  onSubmit() {
    this.activityService.pushActivity(this.activityForm.value.type, this.activityForm.value.participants, this.activityForm.value.price);
  }
  
  constructor( private activityService: ActivityService ) { }

  ngOnInit(): void {
  }

}
