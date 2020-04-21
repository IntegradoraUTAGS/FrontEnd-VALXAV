import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamoAltaPageRoutingModule } from './prestamo-alta-routing.module';

import { PrestamoAltaPage } from './prestamo-alta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamoAltaPageRoutingModule
  ],
  declarations: [PrestamoAltaPage]
})
export class PrestamoAltaPageModule {}
