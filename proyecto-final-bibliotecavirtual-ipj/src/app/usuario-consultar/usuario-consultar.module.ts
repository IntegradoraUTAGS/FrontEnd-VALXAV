import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioConsultarPageRoutingModule } from './usuario-consultar-routing.module';

import { UsuarioConsultarPage } from './usuario-consultar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioConsultarPageRoutingModule
  ],
  declarations: [UsuarioConsultarPage]
})
export class UsuarioConsultarPageModule {}
