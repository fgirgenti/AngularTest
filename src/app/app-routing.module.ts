import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityRequestComponent } from './activity-request/activity-request.component';

const routes: Routes = [
  { path: 'request', component: ActivityRequestComponent},
  { path: 'list', component: ActivityListComponent},
  { path: 'details/:key', component: ActivityDetailComponent},
  { path: '', redirectTo: 'request', pathMatch: 'full' },
  { path: '**', redirectTo: 'request' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
