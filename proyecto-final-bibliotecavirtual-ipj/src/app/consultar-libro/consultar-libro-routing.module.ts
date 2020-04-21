import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarLibroPage } from './consultar-libro.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarLibroPageRoutingModule {}
