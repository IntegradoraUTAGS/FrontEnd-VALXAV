import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
@Injectable({
  providedIn: 'root'
})
export class AppLibroService {
  URL_API = 'http://localhost:5000/libro';
  
  constructor(private http: HttpClient) {  }

  // aqui es donde manda a llamar al back 
 postlibro(libro): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.post(this.URL_API, libro ).subscribe(res => {
      console.log('respuesta', res);
      resolve();
    }, err => {
      console.log('error', err);
      reject();
    });
  });
 }
 
 getlibro() {
 
   return this.http.get(this.URL_API).toPromise();
 }

 actualizarUsuario(idUsuario: string, usuario: UsuarioModel) {
    return this.http.put(`${this.url}/actualizar/${idUsuario}`, usuario).toPromise();
  }


 deletelibro(_id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.delete(this.URL_API + _id).subscribe(res => {
      console.log('respuesta', res);
      resolve();
    }, err => {
      console.log('error', err);
      reject();
    })
  })
  return;
 }



}
