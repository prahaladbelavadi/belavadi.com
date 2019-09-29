import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LandingComponent
  },
  {
    path: 'personal', pathMatch: 'full', component: PersonalComponent
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
