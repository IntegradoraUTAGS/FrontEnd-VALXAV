import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-modificar',
  templateUrl: './usuario-modificar.page.html',
  styleUrls: ['./usuario-modificar.page.scss'],
})
export class UsuarioModificarPage implements OnInit {
_id:string;
nombre:string;
estado:string;
role:string;
img: string;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  modificar(){
    let user ={
      _id:this._id,
      nombre:this.nombre,
      estado:this.estado,
      role:this.role,
      img:this.img
      
    }
    this.usuarioService.putUser(user).then(data=>{
      this._id = this.nombre = this.estado = this.role = this.img = "";
      
    });

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
