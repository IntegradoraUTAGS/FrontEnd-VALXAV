import { Component, OnInit } from '@angular/core';
import { AppLibroService } from '../services/app-libro.service';

@Component({
  selector: 'app-consultar-libro',
  templateUrl: './consultar-libro.page.html',
  styleUrls: ['./consultar-libro.page.scss'],
})
export class ConsultarLibroPage implements OnInit {

  constructor(private appLibroService:AppLibroService) { }
libros = []; 
  ngOnInit() {
    this.consulta();
  }
  consulta(){
    this.appLibroService.getlibro().then((resp:any)=>{console.log(resp);this.libros=resp.libros;}).catch((err)=>{console.log(err);});

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
