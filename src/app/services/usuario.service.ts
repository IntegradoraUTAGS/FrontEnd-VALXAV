import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.model";
import { Coordinador } from "../models/coordinador.model";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  url = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}
  registrar(usuario: Usuario) {
    return this.http.post(`${this.url}/usuario/registrar`, usuario).toPromise();
  }
  login(usuario: Usuario) {
    return this.http.post(`${this.url}/login/login`, usuario).toPromise();
  }

  postCoordinador(coordinador: Coordinador) {
    return this.http
      .post(`${this.url}/coordinador/registrar`, coordinador)
      .toPromise();
  }

  getCoordinador() {
    return this.http.get(`${this.url}/usuario/obtener`).toPromise();
  }

  getAcade() {
    return this.http.get(`${this.url}/academia/obtener`).toPromise();
  }
}
