import { Component, OnInit } from '@angular/core';
import { Materia } from '../../models/materia.model';
import { MateriaService } from 'src/app/services/materia.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-altamateria',
  templateUrl: './altamateria.component.html',
  styleUrls: ['./altamateria.component.css']
})
export class AltamateriaComponent implements OnInit {
 
materia:Materia= new Materia();

constructor(public router: Router, private materiaService: MateriaService) { }



  ngOnInit() {
  }
  
  registrarmateria(forma:NgForm){
    this.materiaService.registrarmateria(this.materia).then((materia: any) => {
      Toast.fire(materia.msg, '', 'success');
      forma.reset();
      this.router.navigateByUrl('inicio');
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }
  
}
