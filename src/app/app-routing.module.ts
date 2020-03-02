import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcademiaComponent} from '../app/academia/academia.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"academia", component:AcademiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
