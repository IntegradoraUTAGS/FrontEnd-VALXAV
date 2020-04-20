import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioConsultarPage } from './usuario-consultar.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioConsultarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioConsultarPageRoutingModule {}
