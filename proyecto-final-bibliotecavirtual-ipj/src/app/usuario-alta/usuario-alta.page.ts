import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-alta',
  templateUrl: './usuario-alta.page.html',
  styleUrls: ['./usuario-alta.page.scss'],
})
export class UsuarioAltaPage implements OnInit {
nombre:string;
email:string;
password:string;
img:string;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  subir(){
    let user ={
      nombre:this.nombre,
      email:this.email,
      password:this.password,
      img:this.img
    }
    this.usuarioService.postUser(user).then(data=>{
      this.nombre = this.email= this.password = this.img = "";
      
    })
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

  