import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component'
import { LHComponent } from './components/lh/lh.component';
import { AccountsComponent } from './components/accounts/accounts.component'
import { PredictionComponent } from './components/prediction/prediction.component'
import { MapComponent } from './components/map/map.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'location_history', component: LHComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'prediction', component:PredictionComponent},
  { path: 'map', component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
