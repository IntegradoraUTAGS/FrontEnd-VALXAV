import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamoModificarPage } from './prestamo-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamoModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamoModificarPageRoutingModule {}
