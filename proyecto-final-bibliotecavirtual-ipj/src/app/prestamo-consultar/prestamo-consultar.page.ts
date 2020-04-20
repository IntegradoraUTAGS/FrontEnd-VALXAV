import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-prestamo-consultar',
  templateUrl: './prestamo-consultar.page.html',
  styleUrls: ['./prestamo-consultar.page.scss'],
})
export class PrestamoConsultarPage implements OnInit {
prestamos = [];
  constructor(private prestamoService: PrestamoService) { }

  ngOnInit() {
    this.consulta();
  }
  consulta(){
    this.prestamoService.getPrestamo().then((resp:any)=>{console.log(resp);this.prestamos=resp.prestamos;}).catch((err)=>{console.log(err);});

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
