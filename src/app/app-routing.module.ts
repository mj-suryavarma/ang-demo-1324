import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PeopleComponent } from './people/people.component';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';


const routes: Routes = [
  {path:'people', component: PeopleComponent},
  {path:'hotels', component: LandingPageComponent},
  {path:'login', component: LoginPageComponent},
  {path: '', redirectTo: "/login", pathMatch:'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
