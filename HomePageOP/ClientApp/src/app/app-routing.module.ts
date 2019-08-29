import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeSkillsComponent } from './resume/skills/skills.component';
import { Project1Component } from './project/project1/project1.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContactComponent } from './contact/contact.component';

 

export const routes: Routes = [
  {
    path: 'homepage', component: AppComponent, children: [

      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'resume', component: ResumeSkillsComponent
      },
      {
        path: 'projects', component: Project1Component
      },
      {
        path: 'favorites', component: FavoriteComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
