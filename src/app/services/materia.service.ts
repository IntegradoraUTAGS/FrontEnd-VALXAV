import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../models/materia.model';
import { environment } from './../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  urlLocal = "http://localhost:3000/api";
 
  urlProd : "http://172.17.1.7:3000/api";
 
  constructor(private http: HttpClient) { }


  registrarmateria(materia: Materia){
    return this.http.post(`${this.urlProd}/materia/registrar`,materia ).toPromise();
    //return this.http.post(`${this.urlLocal}/materia/registrar`,materia ).toPromise();
  }
 
}
