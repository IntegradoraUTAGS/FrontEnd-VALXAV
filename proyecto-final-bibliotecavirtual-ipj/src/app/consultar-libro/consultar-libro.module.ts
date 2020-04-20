import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarLibroPageRoutingModule } from './consultar-libro-routing.module';

import { ConsultarLibroPage } from './consultar-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarLibroPageRoutingModule
  ],
  declarations: [ConsultarLibroPage]
})
export class ConsultarLibroPageModule {}
