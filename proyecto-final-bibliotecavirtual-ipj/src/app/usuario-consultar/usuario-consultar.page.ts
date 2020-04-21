import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-consultar',
  templateUrl: './usuario-consultar.page.html',
  styleUrls: ['./usuario-consultar.page.scss'],
})
export class UsuarioConsultarPage implements OnInit {
usuarios = [];
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.consulta();
  }
  consulta(){
    this.usuarioService.getUser().then((resp:any)=>{console.log(resp);this.usuarios=resp.usuarios;}).catch((err)=>{console.log(err);});

  }
  login(){
    location.pathname = "./login"
}
principal(){
  location.pathname = "./principal"
}
alta(){
location.pathname = "./add-libro"
}
buscar(){
location.pathname = "./consultar-libro"
}
cuenta(){
location.pathname = "./mi-cuenta"
}
favoritos(){
location.pathname = "./favoritos"
}

}
