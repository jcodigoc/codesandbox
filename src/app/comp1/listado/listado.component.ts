import { Cliente, Grupo, clientesIni } from "./../comp1.model";
import { ClientesService } from "./../clientes.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-clientes-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.css"]
})
export class ClientesListadoComponent implements OnInit {
  //clientes: Cliente[] = [];
  clientes: Cliente[];

  clientes$: Observable<Cliente[]>;

  constructor(private clientesService: ClientesService) {
    this.clientes = [
      {
        id: 1,
        nombre: "nombre 1",
        cif: "cif 1",
        direccion: "direccion 1",
        grupo: 1
      },
      {
        id: 2,
        nombre: "nombre 2",
        cif: "cif 2",
        direccion: "direccion 2",
        grupo: 2
      },
      {
        id: 3,
        nombre: "nombre 3",
        cif: "cif 3",
        direccion: "direccion 3",
        grupo: 3
      }
    ];
  }

  ngOnInit() {
    this.clientes$ = this.clientesService.getObservableClientes$();
    this.clientes$.subscribe(clientes => (this.clientes = clientes));
  }
}
