import { Component, OnInit } from '@angular/core';
import { AppLibroService } from '../services/app-libro.service';

@Component({
  selector: 'app-eliminar-libro',
  templateUrl: './eliminar-libro.page.html',
  styleUrls: ['./eliminar-libro.page.scss'],
})
export class EliminarLibroPage implements OnInit {

  constructor(private appLibroService:AppLibroService) { }

  ngOnInit() {
  }
  
  eliminar(_id){
    this.appLibroService.deletelibro(_id).then(data=>{
      this.appLibroService.getlibro()
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
