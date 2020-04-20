import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioModificarPage } from './usuario-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioModificarPageRoutingModule {}
