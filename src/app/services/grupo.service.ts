import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo.model';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  urlLocal = "http://localhost:3000/api";
 
  urlProd : "http://172.17.1.7:3000/api";
 
  constructor(private http: HttpClient) {}

    registrar(grupo: Grupo){
      return this.http.post(`${this.urlProd}/grupo/registrar`, grupo).toPromise();
    }
    obtener(){
      return this.http.get(`${this.urlProd}/grupo/obtener`,).toPromise();
    }
    actualizar(grupo: Grupo, idGrupo: string){
      return this.http.put(`${this.urlProd}/grupo/obtener${idGrupo}`, grupo).toPromise();
    }
    eliminar(idGrupo: string){
      return this.http.delete(`${this.urlProd}/grupo/eliminar/${idGrupo}`).toPromise();
    }
    getPeriodo() {
      return this.http.get(`${this.urlProd}/perido`).toPromise;
    }
    /*postPeriodo(nombre:any) {
      return this.http.post(`${this.url}/periodo`,{
      nombre:nombre
    });
    }*/
    getCarrera() {
      return this.http.get(`${this.urlProd}/carrera`).toPromise;
    }
    /*postCarrera(nombre:any){
      return this.http.post(`${this.url}/carrera`,{
        nombre:nombre
      });
    }*/
    getEspecialidad(){
      return this.http.get(`${this.urlProd}/especialidad`).toPromise;
    }
    /*postEspecialidad(){
      return this.postCarrera(`${this.url}/especialidad`);
        
      }*/
    }

   

