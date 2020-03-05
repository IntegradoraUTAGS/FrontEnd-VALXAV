import { Component, OnInit } from '@angular/core';
import {AcademiaService} from '../../service/academia.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-academia',
  templateUrl: './academia.component.html',
  styleUrls: ['./academia.component.css']
})
export class AcademiaComponent implements OnInit {
academias: any[] = []
nombre='';

  constructor(    protected academiaService: AcademiaService) { }

  ngOnInit() {
    
    this.academiaService.getAcademia()
    .subscribe(
      (data) => { // Success
        this.academias = data['academia'];
    
      },
      (error) => {
        console.error(error);
      }
    );
  }









  
  Agregar(Nombre){
    this.academiaService.postAcademia(Nombre)
    .subscribe(
      (data) => { // Success
      
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        
        location.reload()
      },
      (error) => {
        console.error(error);
      }
    );
  }







  AlertaDelete(Id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
          
        )
        this.Eliminar(Id);
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  Eliminar(Id){
    this.academiaService.deleteAcademia(Id)
    .subscribe(
      (data) => { // Success
        location.reload()
        
      },
      (error) => {
        console.error(error);
      }
    );
  }





Editar(id:any,nombre:any){
  this.academiaService.putAcademia(id,nombre)
  .subscribe(
    (data) =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    },
    (error)=>{
      console.error(error);
    }
  )
}
AlertaEditar(Id,inputValue){
 
  Swal.fire({
    title: 'Nuevo nombre de la academia',
    input: 'text',
    inputValue: inputValue,
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
      this.Editar(Id,value)
      location.reload()
    }
  })
}

}
