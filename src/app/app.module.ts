import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {FormsModule}  from '@angular/forms';
import {MusicService} from './music.service'
import { HttpClientModule }    from '@angular/common/http';



import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AltacarreraComponent } from './altacarrera/altacarrera.component';
import { AltaespecialidadComponent } from './altaespecialidad/altaespecialidad.component';
import { AltaperiodoComponent } from './altaperiodo/altaperiodo.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AltacarreraComponent,
    AltaespecialidadComponent,
    AltaperiodoComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
