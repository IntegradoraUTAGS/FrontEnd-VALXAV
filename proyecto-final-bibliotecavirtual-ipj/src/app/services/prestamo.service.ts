import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  URL_API = 'http://localhost:5000/prestamo';
  users:any;
  constructor(private http: HttpClient) {  this.users = [];}
  
  // aqui es donde manda a llamar al back 
 postPrestamo(prestamo): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.post(this.URL_API, prestamo).subscribe(res => {
      console.log('respuesta', res);
      resolve();
    }, err => {
      console.log('error', err);
      reject();
    });
  });
 }
 
 getPrestamo() {
 
  return this.http.get(this.URL_API).toPromise();
}

 putPrestamo(user): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.put(this.URL_API + user._id, user).subscribe(res => {
      console.log('respuesta', res);
      resolve();
    }, err => {
      console.log('error', err);
      reject();
    })
  })
 }


 deletePrestamo(_id: string): Promise<any> {
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
