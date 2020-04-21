import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamoConsultarPageRoutingModule } from './prestamo-consultar-routing.module';

import { PrestamoConsultarPage } from './prestamo-consultar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamoConsultarPageRoutingModule
  ],
  declarations: [PrestamoConsultarPage]
})
export class PrestamoConsultarPageModule {}
