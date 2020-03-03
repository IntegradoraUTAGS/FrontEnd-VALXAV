import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AltacarreraComponent } from './altacarrera/altacarrera.component';
import { AltaperiodoComponent } from './altaperiodo/altaperiodo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'altacarrera', component:AltacarreraComponent},
  {path:'altaperiodo', component:AltaperiodoComponent},
  {path:'home',component:DashboardComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
