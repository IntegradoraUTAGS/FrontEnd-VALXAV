import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment.prod';
@Injectable({
  providedIn: "root",
})
export class EspecialidadService {
  urlLocal = "http://localhost:3000/api";
 
  urlProd = "http://172.17.1.7:3001/api";
  
  constructor(private http: HttpClient) {}

  registrar(nombre: any, carrera: any) {
    return this.http
      .post(`${this.urlProd}/especialidad/registrar`, { nombre, carrera })
      .toPromise();
  }
}
