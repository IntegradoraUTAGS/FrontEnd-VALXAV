import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioEliminarPageRoutingModule } from './usuario-eliminar-routing.module';

import { UsuarioEliminarPage } from './usuario-eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioEliminarPageRoutingModule
  ],
  declarations: [UsuarioEliminarPage]
})
export class UsuarioEliminarPageModule {}
