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
constructor(private materiaService: MateriaService) { }


  ngOnInit() {
  
  }
  registrarmateria(){
    console.log(this.materia);
    this.materiaService.registrarmateria(this.materia).then((respuesta) => {
    }).catch((err) => {
    });
    }
   
  
}
