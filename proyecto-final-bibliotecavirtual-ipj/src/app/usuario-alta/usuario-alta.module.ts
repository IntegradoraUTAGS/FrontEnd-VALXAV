import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioAltaPageRoutingModule } from './usuario-alta-routing.module';

import { UsuarioAltaPage } from './usuario-alta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioAltaPageRoutingModule
  ],
  declarations: [UsuarioAltaPage]
})
export class UsuarioAltaPageModule {}
