import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities: Activity[] = [];
  selected!: Activity;

  constructor( private httpClient: HttpClient ) { }

  pushActivity(type: string, participants: number, price: number ): boolean {
    const params = new HttpParams().set('type', type).set('participants', participants).set('price', price);
    this.httpClient.get<Activity>('http://www.boredapi.com/api/activity?', { params })
    .subscribe( data => {
      if('error' in data) {
        console.warn(data);
      } else {
        this.activities.push(data);
      }
      console.log(data)
    })
    return true;
  }

  getActivities(): Activity[] {
    return this.activities;
  }

  selectActivity(activity: Activity) {
    this.selected = activity;
    console.log(this.selected)
  }

  getSelected(): Activity {
    return this.selected;
  }
 
}
