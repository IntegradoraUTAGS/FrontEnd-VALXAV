import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamoConsultarPage } from './prestamo-consultar.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamoConsultarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamoConsultarPageRoutingModule {}
