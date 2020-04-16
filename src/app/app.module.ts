import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AccordionModule } from "primeng/accordion";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";
import { PasswordModule } from "primeng/password";
import { TooltipModule } from "primeng/tooltip";
import { SlideMenuModule } from "primeng/slidemenu";
import { TieredMenuModule } from "primeng/tieredmenu";
import { PanelModule } from "primeng/panel";
import { CarouselModule } from "primeng/carousel";
import { StepsModule } from "primeng/steps";
import { SplitButtonModule } from "primeng/splitbutton";
import { ProfileComponent } from "./pages/profile/profile.component";
import { CardModule } from "primeng/card";
import { OrganizationChartModule } from "primeng/organizationchart";
import { ToolbarModule } from "primeng/toolbar";
import { FieldsetModule } from "primeng/fieldset";
import { ChipsModule } from "primeng/chips";
import { FormsModule } from "@angular/forms";
import { TerminalModule } from "primeng/terminal";
import { HeaderComponent } from "./layout/header/header.component";
import { LandingComponent } from "./pages/landing/landing.component";
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
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { SidebarModule } from "primeng/sidebar";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    ProfileComponent,
    PersonalComponent,
    ProfessionalComponent,
    AboutComponent,
    ResourcesComponent,
    MileStoneComponent,
    BlogComponent,
    LearningComponent,
    ProjectsComponent,
    NewsletterComponent,
    TerminalComponent,
    StatusComponent,
    ContactComponent,
    EthicsComponent,
    BooksComponent,
    InfluencesComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    PasswordModule,
    TooltipModule,
    SlideMenuModule,
    TieredMenuModule,
    PanelModule,
    CarouselModule,
    StepsModule,
    SplitButtonModule,
    CardModule,
    OrganizationChartModule,
    ToolbarModule,
    FieldsetModule,
    ChipsModule,
    FormsModule,
    TerminalModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
