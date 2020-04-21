import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  
})
export class PrincipalPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['./login']); 
  }
  principal(){
    
    this.router.navigate(['./principal']); 
}
 alta(){
  
  this.router.navigate(['./principal']); 
}
buscar(){
  this.router.navigate(['./principal']); 
}
cuenta(){
  this.router.navigate(['./principal']); 
}
}
