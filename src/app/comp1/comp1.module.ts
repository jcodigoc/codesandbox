import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClientesService } from "./clientes.service";
import { ClienteAltaComponent } from "./alta/alta.component";
import { ClientesListadoComponent } from "./listado/listado.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ClienteAltaComponent, ClientesListadoComponent],
  exports: [ClienteAltaComponent, ClientesListadoComponent],
  providers: [ClientesService]
})
export class ClientesModule {}
