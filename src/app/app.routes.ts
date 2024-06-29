import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { CareComponent } from './care/care.component';
import { PlanningComponent } from './planning/planning.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { FormsComponent } from './forms/forms.component';
import { ApplicationFormComponent } from './forms/application-form/application-form.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'care', component: CareComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'content', component: ContentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'forms', component: FormsComponent, children: [
      { path: 'application-form', component: ApplicationFormComponent },
    ]
  },
  { path: 'search/:searchValue', component: SearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
