import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AltacarreraComponent } from "./pages/altacarrera/altacarrera.component";
import { AltagrupoComponent } from "./pages/altagrupo/altagrupo.component";
import { AltacordinadorComponent } from "./pages/altacordinador/altacordinador.component";
import { AltaperiodoComponent } from "./pages/altaperiodo/altaperiodo.component";
import { AltaespecialidadComponent } from "./pages/altaespecialidad/altaespecialidad.component";
import { AltamateriaComponent } from "./pages/altamateria/altamateria.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { AcademiaComponent } from "./pages/academia/academia.component";
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "altacarrera", component: AltacarreraComponent,canActivate: [LoginGuard] },
  { path: "altagrupo", component: AltagrupoComponent,canActivate: [LoginGuard] },
  { path: "altacordinador", component: AltacordinadorComponent,canActivate: [LoginGuard] },
  { path: "altaperiodo", component: AltaperiodoComponent,canActivate: [LoginGuard] },
  { path: "altaespecialidad", component: AltaespecialidadComponent,canActivate: [LoginGuard] },
  { path: "altamateria", component: AltamateriaComponent,canActivate: [LoginGuard] },
  { path: "academia", component: AcademiaComponent,canActivate: [LoginGuard] },
  { path: "home", component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
