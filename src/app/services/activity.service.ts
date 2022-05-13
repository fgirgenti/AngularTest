import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities: Activity[] = [];

  constructor( private httpClient: HttpClient, private router: Router ) { }

  pushActivity(type: string, participants: number, price: number ): void {
    const params = new HttpParams().set('type', type).set('participants', participants).set('price', price);
    this.httpClient.get<Activity>('http://www.boredapi.com/api/activity?', { params })
    .subscribe( data => {
      if('error' in data) {
        console.warn(data);
      } else {
        this.activities.push(data);
      }
      console.log(data)
      if (this.activities.length > 0) {
        this.router.navigateByUrl('/list');
      }
    })
  }

  getActivities(): Activity[] {
    return this.activities;
  }

  selectActivity(key: string) {
    this.router.navigate(['details', key])
  }

  getSelected(key: string | null): Observable<Activity> {
    return this.httpClient.get<Activity>(`http://www.boredapi.com/api/activity?key=${key}`)
  }
 
}
