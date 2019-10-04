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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    ProfileComponent,
    PersonalComponent,
    ProfessionalComponent,
    AboutComponent,
    ResourcesComponent
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
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
