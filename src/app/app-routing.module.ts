import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './header/personal/personal.component';
import { ProfessionalComponent } from './header/professional/professional.component';
import { AboutComponent } from './header/about/about.component';
import { ResourcesComponent } from './header/resources/resources.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LandingComponent
  },
  {
    path: 'personal', pathMatch: 'full', component: PersonalComponent
  },
  {
    path: 'professional', pathMatch: 'full', component: ProfessionalComponent
  },
  {
    path: 'about', pathMatch: 'full', component: AboutComponent
  },
  {
    path: 'resources', pathMatch: 'full', component: ResourcesComponent
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
