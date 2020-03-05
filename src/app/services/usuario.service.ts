import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://localhost:3000'

  constructor(private http: HttpClient) { }


  registrar(usuario: Usuario){
    return this.http.post(`${this.url}/usuario/registrar`, usuario).toPromise();
  }

  login(usuario: Usuario){
    return this.http.post(`${this.url}/login`, usuario).toPromise();
  }
}
