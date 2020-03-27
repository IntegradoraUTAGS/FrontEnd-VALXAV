import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../models/materia.model';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  url='http://localhost:3000/api'
  constructor(private http: HttpClient) { }
  registrar(materia:Materia){
    return this.http.post(`${this.url}/registrar`,materia).toPromise()
  }
  obtener(){
    return this.http.get(`${this.url}/obtener`).toPromise();
  }
  actualizar(materia:Materia, id:string){
    return this.http.post(`${this.url}/obtener/${id}`,materia).toPromise();
  }
  eliminar(id:string){
    return this.http.delete(`${this.url}/eliminar/${id}`).toPromise();
  }
}
