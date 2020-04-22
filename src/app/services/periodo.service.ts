import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Periodo } from '../models/periodo.model';
import { environment } from './../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})

export class PeriodoService {

 constructor(private http: HttpClient) { }
 urlLocal : "http://localhost:3000/api";
 
 urlProd : "http://172.17.1.7:3000/api";

 registrarperiodo(periodo:Periodo){
  return this.http.post('http://172.17.1.7:3000/api/periodo/registrar',periodo).toPromise();
  //return this.http.post('http://localhost:3000/api/periodo/registrar',periodo).toPromise();
 }
 
}