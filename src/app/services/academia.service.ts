import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Academia } from "../models/academia.model";
@Injectable({
  providedIn: "root",
})
export class AcademiaService {
  url = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}
  obtener() {
    return this.http.get(`${this.url}/academia`).toPromise();
  }

  registrar(nombre: any) {
    return this.http.post(`${this.url}/academia`, { nombre }).toPromise();
  }

  eliminar(id: any) {
    return this.http.delete(`${this.url}/academia/${id}`).toPromise();
  }

  actualizar(id: any, nombre: any) {
    return this.http.put(`${this.url}/academia/${id}`, { nombre }).toPromise();
  }
}
