import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';
import { HeaderComponent } from './header/header.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelModule } from 'primeng/panel';
import { LandingComponent } from './landing/landing.component';
import { CarouselModule } from 'primeng/carousel';
import { StepsModule } from 'primeng/steps';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './header/personal/personal.component';
import { CardModule } from 'primeng/card';
import { ProfessionalComponent } from './header/professional/professional.component';
import { AboutComponent } from './header/about/about.component';
import { ResourcesComponent } from './header/resources/resources.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { MileStoneComponent } from './header/personal/mile-stone/mile-stone.component';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { BlogComponent } from './header/resources/blog/blog.component';
import { LearningComponent } from './header/resources/learning/learning.component';
import { ProjectsComponent } from './header/resources/projects/projects.component';
import { NewsletterComponent } from './header/resources/newsletter/newsletter.component';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { TerminalComponent } from './header/resources/terminal/terminal.component';
import { TerminalModule } from 'primeng/terminal';
import { StatusComponent } from './header/personal/status/status.component';
import { ContactComponent } from './header/about/contact/contact.component';



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
    ContactComponent
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
    TerminalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
