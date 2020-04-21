import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarLibroPageRoutingModule } from './eliminar-libro-routing.module';

import { EliminarLibroPage } from './eliminar-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarLibroPageRoutingModule
  ],
  declarations: [EliminarLibroPage]
})
export class EliminarLibroPageModule {}
