import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { PersonalComponent } from "./layout/header/personal/personal.component";
import { ProfessionalComponent } from "./layout/header/professional/professional.component";
import { AboutComponent } from "./layout/header/about/about.component";
import { ResourcesComponent } from "./layout/header/resources/resources.component";
import { MileStoneComponent } from "./layout/header/personal/mile-stone/mile-stone.component";
import { BlogComponent } from "./layout/header/resources/blog/blog.component";
import { LearningComponent } from "./layout/header/resources/learning/learning.component";
import { ProjectsComponent } from "./layout/header/resources/projects/projects.component";
import { NewsletterComponent } from "./layout/header/resources/newsletter/newsletter.component";
import { TerminalComponent } from "./layout/header/resources/terminal/terminal.component";
import { StatusComponent } from "./layout/header/personal/status/status.component";
import { ContactComponent } from "./layout/header/about/contact/contact.component";
import { EthicsComponent } from "./layout/header/about/ethics/ethics.component";
import { BooksComponent } from "./layout/header/about/books/books.component";
import { InfluencesComponent } from "./layout/header/about/influences/influences.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LandingComponent,
  },
  {
    path: "personal",
    children: [
      { path: "", pathMatch: "full", component: PersonalComponent },
      { path: "milestone", component: MileStoneComponent },
      { path: "status", component: StatusComponent },
    ],
  },
  {
    path: "professional",
    pathMatch: "full",
    component: ProfessionalComponent,
  },
  {
    path: "about",
    children: [
      { path: "", pathMatch: "full", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "ethics", component: EthicsComponent },
      { path: "books", component: BooksComponent },
      { path: "influences", component: InfluencesComponent },
    ],
  },
  {
    path: "resources",
    children: [
      { path: "", pathMatch: "full", component: ResourcesComponent },
      { path: "blog", component: BlogComponent },
      { path: "learning", component: LearningComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "newsletter", component: NewsletterComponent },
      { path: "terminal", component: TerminalComponent },
    ],
  },
  {
    path: "profile",
    component: ProfileComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
