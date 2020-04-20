import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { AppLibroService } from '../services/app-libro.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.page.html',
  styleUrls: ['./modificar-libro.page.scss'],
})
export class ModificarLibroPage implements OnInit {
  _id:string;
  nombre:string;
  autor:string;
  genero:string;
  disponible:string;
  img:string;
  @Output() salida = new EventEmitter();
  constructor(private appLibroService: AppLibroService) { }

  ngOnInit() {
  }
  modificar() {
    this.appLibroService.putlibro(this._id).then((usuario: any) => {
      Toast.fire(usuario.msg, '', 'success');
      this.salida.emit();
      
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
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
