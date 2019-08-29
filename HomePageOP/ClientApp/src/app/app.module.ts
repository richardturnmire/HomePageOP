import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { HomeComponent } from './home/home.component';

import { FavoriteComponent } from './favorite/favorite.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeSkillsComponent } from './resume/skills/skills.component';
import { ResumeSgComponent } from './resume/sg/sg.component';
import { ResumeFtComponent } from './resume/ft/ft.component';
import { ResumeCebComponent } from './resume/ceb/ceb.component';
import { ResumeConsultingComponent } from './resume/consulting/consulting.component';
import { ResumeEducationComponent } from './resume/education/education.component';
import { ResumeTranscentraComponent } from './resume/transcentra/transcentra.component';
import { Project1Component } from './project/project1/project1.component';
import { Project2Component } from './project/project2/project2.component';
import { Project3Component } from './project/project3/project3.component';
import { Project4Component } from './project/project4/project4.component';

 
  
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FavoriteComponent,
    ContactComponent,
    ResumeSkillsComponent,
    ResumeSgComponent,
    ResumeFtComponent,
    ResumeCebComponent,
    ResumeConsultingComponent,
    ResumeEducationComponent,
    ResumeTranscentraComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component
  
  ],
  imports: [
    BrowserModule,
    routing,
    MDBBootstrapModulesPro.forRoot(),
    AngularFullpageModule

   
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
