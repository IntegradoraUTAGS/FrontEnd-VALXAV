import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Academia } from "../models/academia.model";
import { environment } from './../../environments/environment.prod';
@Injectable({
  providedIn: "root",
})
export class AcademiaService {
  urlLocal = "http://localhost:3000/api";
 
  urlProd = "http://172.17.1.7:3001/api";
  constructor(private http: HttpClient) {}
  registrar(Academia: Academia) {
    return this.http
      .post(`${this.urlProd}/registrar`, { nombre: Academia })
      .toPromise();
  }
  obtener() {
    return this.http.get(`${this.urlProd}/obtener`).toPromise();
  }
  actualizar(id: any, nombre: String) {
    return this.http
      .put(`${this.urlProd}/actualizar/${id}`, { nombre: nombre })
      .toPromise();
  }
  eliminar(id: any) {
    return this.http.delete(`${this.urlProd}/eliminar/${id}`).toPromise();
  }
}
