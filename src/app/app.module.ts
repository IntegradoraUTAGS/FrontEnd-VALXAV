import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

import {FormsModule}  from '@angular/forms';
import {MusicService} from './music.service'
import { HttpClientModule }    from '@angular/common/http';



import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { AltacarreraComponent } from './pages/altacarrera/altacarrera.component';
import { AltaespecialidadComponent } from './pages/altaespecialidad/altaespecialidad.component';
import { AltaperiodoComponent } from './pages/altaperiodo/altaperiodo.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
