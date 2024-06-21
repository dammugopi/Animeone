import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionComponent } from './components/action/action.component';
import { RomanceComponent } from './components/romance/romance.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './components/error/error.component';
import { FantacyComponent } from './components/fantacy/fantacy.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
   
  { path: 'home',component:HomeComponent  
  },

  { path: 'action',component:ActionComponent},
  { path: 'romance',component:RomanceComponent},
  { path: 'scifi',component:SciFiComponent},
  { path: 'fantasy',component:FantacyComponent},
  { path: 'feedback',component:FeedbackComponent},
  
  { path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
