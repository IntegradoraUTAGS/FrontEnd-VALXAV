import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from './../../environments/environment.prod';
@Injectable({
  providedIn: "root",
})
export class CarreraService {
  urlLocal : "http://localhost:3000/api";
 
  urlProd : "http://172.17.1.7:3000/api";
 
  constructor(protected http: HttpClient) {}
  registrar(nombre: any) {
    return this.http
      .post(`${this.urlProd}/carrera/registrar`, { nombre })
      .toPromise();
  }
  obtener() {
    return this.http.get(`${this.urlProd}/carrera/obtener`).toPromise();
  }
}
