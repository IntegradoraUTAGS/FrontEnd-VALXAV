import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLibroPageRoutingModule } from './add-libro-routing.module';

import { AddLibroPage } from './add-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLibroPageRoutingModule
  ],
  declarations: [AddLibroPage]
})
export class AddLibroPageModule {}
