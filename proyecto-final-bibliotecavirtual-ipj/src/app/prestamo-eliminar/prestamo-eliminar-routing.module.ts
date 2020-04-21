import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamoEliminarPage } from './prestamo-eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamoEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamoEliminarPageRoutingModule {}
