import { Component, OnInit } from '@angular/core';
import { Periodo } from 'src/app/models/periodo.model';
import { PeriodoService } from '../../services/periodo.service';




@Component({
  selector: 'app-altaperiodo',
  templateUrl: './altaperiodo.component.html',
  styleUrls: ['./altaperiodo.component.css']
})
export class AltaperiodoComponent implements OnInit {
  periodo: Periodo = new Periodo ();
  

  constructor(private periodoService: PeriodoService) {

   }

  ngOnInit() {
  }
registrarperiodo(){
  console.log(this.periodo);
  this.periodoService.registrarperiodo(this.periodo).then((respuesta) => {

  }).catch((err) => {

  });
  
  }
}

