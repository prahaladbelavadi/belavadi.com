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
import { NewsletterComponent } from './header/resources/newsletter/newsletter.component';
import { TerminalComponent } from './header/resources/terminal/terminal.component';
import { StatusComponent } from './header/personal/status/status.component';
import { ContactComponent } from './header/about/contact/contact.component';
import { EthicsComponent } from './header/about/ethics/ethics.component';
import { BooksComponent } from './header/about/books/books.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LandingComponent
  },
  {
    path: 'personal', children:
      [
        { path: '', pathMatch: 'full', component: PersonalComponent },
        { path: 'milestone', component: MileStoneComponent },
        { path: 'status', component: StatusComponent }
      ]
  },
  {
    path: 'professional', pathMatch: 'full', component: ProfessionalComponent
  },
  {
    path: 'about', children: [
      { path: '', pathMatch: 'full', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'ethics', component: EthicsComponent },
      { path: 'books', component: BooksComponent }
    ]
  },
  {
    path: 'resources', children: [
      { path: '', pathMatch: 'full', component: ResourcesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'learning', component: LearningComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'newsletter', component: NewsletterComponent },
      { path: 'terminal', component: TerminalComponent }


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
