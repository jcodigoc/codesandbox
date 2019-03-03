import { Injectable } from "@angular/core";
import { Cliente, Grupo } from "./comp1.model";
import { Observable, Subject } from "rxjs";
// import { Subject } from 'rxjs/Subject';

@Injectable()
export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[];
  private clientes$: Subject<Cliente[]> = new Subject<Cliente[]>();

  constructor() {
    this.grupos = [
      { id: 0, nombre: "Sin definir" },
      { id: 1, nombre: "Activos" },
      { id: 2, nombre: "Inactivos" },
      { id: 3, nombre: "Deudores" }
    ];
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

  getGrupos() {
    return this.grupos;
  }

  // Este metodo ya no lo usara
  // Ya que nadie va a usar el array de clientes directamente
  // En vez de ello, usaremos el observable.
  // getClientes() {
  //   return this.clientes;
  // }

  getObservableClientes$(): Observable<Cliente[]> {
    return this.clientes$.asObservable();
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    this.clientes$.next(this.clientes);
    console.log("agregarCliente out");
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: "",
      cif: "",
      direccion: "",
      grupo: 0
    };
  }
}
