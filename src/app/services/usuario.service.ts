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

  getAcademia() {
    return this.http.get('http://172.16.111.183:3000/academia');
  }


  postAcademia(nombre:any){
    return this.http.post('http://172.16.111.183:3000/academia',{
      nombre:nombre
    });
  }

  deleteAcademia(id:any){
    return this.http.delete('http://172.16.111.183:3000/academia/'+id)
  }

  putAcademia(id:any,nombre:any){
    return this.http.put('http://172.16.111.183:3000/academia/'+id,{
      nombre:nombre
    });
  }
}
