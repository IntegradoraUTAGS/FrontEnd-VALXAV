import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Academia } from '../models/academia.model';
@Injectable({
  providedIn: 'root'
})
export class AcademiaService {
  url='http://localhost:3000/api'
  constructor(private http: HttpClient) { }
  registrar(academia:Academia){
    return this.http.post(`${this.url}/registrar`,academia).toPromise()
  }
  obtener(){
    return this.http.get(`${this.url}/obtener`).toPromise();
  }
  actualizar(academia:Academia, id:string){
    return this.http.post(`${this.url}/obtener/${id}`,academia).toPromise();
  }
  eliminar(id:string){
    return this.http.delete(`${this.url}/eliminar/${id}`).toPromise();
  }
}
