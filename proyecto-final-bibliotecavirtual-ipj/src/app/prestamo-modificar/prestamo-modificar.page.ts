import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-prestamo-modificar',
  templateUrl: './prestamo-modificar.page.html',
  styleUrls: ['./prestamo-modificar.page.scss'],
})
export class PrestamoModificarPage implements OnInit {
_id:string;
usuario:string;
libro:string;
fecha:string;
  constructor(private prestamoService: PrestamoService) { }

  ngOnInit() {
  }
  modificar(){
    let user ={
      _id:this._id,
      usuario:this.usuario,
      libro:this.libro,
      fecha:this.fecha
      
    }
    this.prestamoService.putPrestamo(user).then(data=>{
      this._id = this.usuario = this.libro= this.fecha = "";
      
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
