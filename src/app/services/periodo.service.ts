import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Periodo } from '../models/periodo.model';
@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  url='http://localhost:3000/api'

  constructor(private http: HttpClient) { }


 
  postPeriodo(periodo: Periodo){
    return this.http.post(`${this.url}/periodo/registrar`, periodo ).toPromise();
  }
}
