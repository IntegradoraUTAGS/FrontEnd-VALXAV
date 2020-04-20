import { Component, OnInit } from '@angular/core';
import { AppLibroService } from '../services/app-libro.service';
import { Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.page.html',
  styleUrls: ['./add-libro.page.scss'],
})

export class AddLibroPage implements OnInit {
nombre:string;
autor:string;
genero:string;
img:string;


  constructor (private appLibroService:AppLibroService){ }
              
  ngOnInit() {
  }

  subir(){
    let libro ={
      nombre:this.nombre,
      autor:this.autor,
      genero:this.genero,
      img:this.img
    }
    this.appLibroService.postlibro(libro).then(data=>{
      this.nombre = this.autor= this.genero = this.img = "";
      
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
