import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkbenchComponent } from './workbench/workbench.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LandingComponent
  },
  {
    path: 'workbench', pathMatch: 'full', children: [
      { path: '', component: WorkbenchComponent },
    ]
  },
  {
    path: 'profile', component: ProfileComponent, children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
