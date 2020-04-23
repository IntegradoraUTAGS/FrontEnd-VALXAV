import { environment } from './../../environments/environment.prod';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.model";
import { Coordinador } from "../models/coordinador.model";

 
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  urlLocal = "http://localhost:3000/api";
 
  urlProd = "http://172.17.1.7:3001/api";

  constructor(private http: HttpClient) {}
  registrar(usuario: Usuario) {
    return this.http.post(`${this.urlProd}/usuario/registrar`, usuario).toPromise();
  }
  login(usuario: Usuario) {
    return this.http.post(`${this.urlProd}/login/login`, usuario).toPromise();

  }
  getAcademia() {
    return this.http.get(`${this.urlProd}/academia`);
  }

  postAcademia(nombre: any) {
    return this.http.post(`${this.urlProd}/academia`, {
      nombre: nombre
    });
  }

  deleteAcademia(id: any) {
    return this.http.delete(`${this.urlProd}/academia/${id}`);
  }

  putAcademia(id: any, nombre: any) {
    return this.http.put(`${this.urlProd}/academia/${id}`, {
      nombre: nombre
    });

  }

  postCoordinador(coordinador: Coordinador) {
    return this.http
      .post(`${this.urlProd}/coordinador/registrar`, coordinador)
      .toPromise();
  }


  postCarrera(nombre: any) {
    return this.http.post(`${this.urlProd}/carrera/registrar`, {
      nombre: nombre
    });
  }


  getCoordinador() {
    return this.http.get(`${this.urlProd}/usuario/obtener`).toPromise();
  }

  getAcade() {
    return this.http.get(`${this.urlProd}/academia/obtener`).toPromise();
  }
}
