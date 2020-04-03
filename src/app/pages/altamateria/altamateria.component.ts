import { Component, OnInit } from '@angular/core';
import { Materia } from '../../models/materia.model';
import { MateriaService } from 'src/app/services/materia.service';



@Component({
  selector: 'app-altamateria',
  templateUrl: './altamateria.component.html',
  styleUrls: ['./altamateria.component.css']
})
export class AltamateriaComponent implements OnInit {
materia:Materia= new Materia();
constructor(private servicio: MateriaService) { }

  ngOnInit() {

  }
  registrarmateria(){
    this.servicio.postMateria(this.materia).then(resp =>{
      console.log(resp);
      //location.href
    }).catch((err:any)=>{
      console.log(err);
    })
    }
}
