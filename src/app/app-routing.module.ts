import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './header/personal/personal.component';
import { ProfessionalComponent } from './header/professional/professional.component';
import { AboutComponent } from './header/about/about.component';
import { ResourcesComponent } from './header/resources/resources.component';
import { MileStoneComponent } from './header/personal/mile-stone/mile-stone.component';
import { BlogComponent } from './header/resources/blog/blog.component';
import { LearningComponent } from './header/resources/learning/learning.component';
import { ProjectsComponent } from './header/resources/projects/projects.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LandingComponent
  },
  {
    path: 'personal', children:
      [
        { path: '', pathMatch: 'full', component: PersonalComponent },
        { path: 'milestone', component: MileStoneComponent }
      ]
  },
  {
    path: 'professional', pathMatch: 'full', component: ProfessionalComponent
  },
  {
    path: 'about', pathMatch: 'full', component: AboutComponent
  },
  {
    path: 'resources', children: [
      { path: '', pathMatch: 'full', component: ResourcesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'learning', component: LearningComponent },
      { path: 'projects', component: ProjectsComponent }

    ],
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
