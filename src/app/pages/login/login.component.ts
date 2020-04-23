import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  usuario: Usuario  = new Usuario();
  constructor(private servicio: UsuarioService, public router: Router) { }

  ngOnInit() {
  
  }
 login(){
this.servicio.login(this.usuario).then((resp:any) =>{
  localStorage.setItem('token',resp.token)
  console.log(resp);
  this.router.navigateByUrl('home')
}).catch((err:any)=>{
  console.log(err);
})
 }
}
