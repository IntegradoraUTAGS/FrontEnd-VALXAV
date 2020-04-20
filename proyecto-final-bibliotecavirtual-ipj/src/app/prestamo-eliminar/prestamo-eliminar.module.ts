import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamoEliminarPageRoutingModule } from './prestamo-eliminar-routing.module';

import { PrestamoEliminarPage } from './prestamo-eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamoEliminarPageRoutingModule
  ],
  declarations: [PrestamoEliminarPage]
})
export class PrestamoEliminarPageModule {}
