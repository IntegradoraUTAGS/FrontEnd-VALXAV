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
  

  constructor(private servicio: PeriodoService) { }

  ngOnInit() {
  }
registrarperiodo(){
  this.servicio.postPeriodo(this.periodo).then(resp =>{
    console.log(resp);
    //location.href
  }).catch((err:any)=>{
    console.log(err);
  })
  }
}

