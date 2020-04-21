import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamo-eliminar',
  templateUrl: './prestamo-eliminar.page.html',
  styleUrls: ['./prestamo-eliminar.page.scss'],
})
export class PrestamoEliminarPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
