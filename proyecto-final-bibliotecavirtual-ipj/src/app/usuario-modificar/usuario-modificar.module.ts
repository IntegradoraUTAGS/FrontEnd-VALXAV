import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioModificarPageRoutingModule } from './usuario-modificar-routing.module';

import { UsuarioModificarPage } from './usuario-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioModificarPageRoutingModule
  ],
  declarations: [UsuarioModificarPage]
})
export class UsuarioModificarPageModule {}
