import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-prestamo-alta',
  templateUrl: './prestamo-alta.page.html',
  styleUrls: ['./prestamo-alta.page.scss'],
})
export class PrestamoAltaPage implements OnInit {

libro:string;
usuario:string;
fecha:string;
  constructor(private prestamoService:PrestamoService) { }

  ngOnInit() {}


    subir(){
      let prestamo ={
        libro:this.libro,
        usuario:this.usuario,
        fecha:this.fecha
        
      }
      this.prestamoService.postPrestamo(prestamo).then(data=>{
        this.libro = this.usuario= this.fecha = "";
        
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
