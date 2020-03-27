import { UsuarioService } from "./../../services/usuario.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-altacarrera",
  templateUrl: "./altacarrera.component.html",
  styleUrls: ["./altacarrera.component.css"]
})
export class AltacarreraComponent implements OnInit {
  constructor(protected usuarioService: UsuarioService) {}
  nombre = "";
  ngOnInit() {}

  agregar(nombre: any) {
    this.usuarioService.postCarrera(nombre).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
