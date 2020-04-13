import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../models/materia.model';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  url='http://localhost:3000/api'
  constructor(private http: HttpClient) { }


  postMateria(periodo: Materia){
    return this.http.post(`${this.url}/materia/registrar`, Materia ).toPromise();

  }
  getMateria() {
    return this.http.get(`${this.url}/materia/obtener`).toPromise();
  }
  getAcade() {
    return this.http.get(`${this.url}/academia/obtener`).toPromise();
  }
}
