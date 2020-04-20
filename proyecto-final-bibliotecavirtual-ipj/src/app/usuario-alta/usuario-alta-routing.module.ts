import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioAltaPage } from './usuario-alta.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioAltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioAltaPageRoutingModule {}
