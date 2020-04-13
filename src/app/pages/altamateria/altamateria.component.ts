import { Component, OnInit } from '@angular/core';
import { Materia } from '../../models/materia.model';
import { MateriaService } from 'src/app/services/materia.service';
import { Acade } from 'src/app/models/acade.model';

@Component({
  selector: 'app-altamateria',
  templateUrl: './altamateria.component.html',
  styleUrls: ['./altamateria.component.css']
})
export class AltamateriaComponent implements OnInit {
materia:Materia= new Materia();
constructor(private servicio: MateriaService) { }
acade: Acade = new Acade();
acades: Acade[];

  ngOnInit() {
   this.obtenerAcade();
  }
  registrarmateria(){
    this.servicio.postMateria(this.materia).then(resp =>{
      console.log(resp);
      //location.href
    }).catch((err:any)=>{
      console.log(err);
    })
    }
   
  obtenerAcade(){
      this.servicio.getAcade().then((resp: any) =>{
      this.acades = resp.academia;
        console.log(resp);
      }).catch(()=>{
      });
   }
}
