import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamoModificarPageRoutingModule } from './prestamo-modificar-routing.module';

import { PrestamoModificarPage } from './prestamo-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamoModificarPageRoutingModule
  ],
  declarations: [PrestamoModificarPage]
})
export class PrestamoModificarPageModule {}
