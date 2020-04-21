import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.page.html',
  styleUrls: ['./usuario-eliminar.page.scss'],
})
export class UsuarioEliminarPage implements OnInit {

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
