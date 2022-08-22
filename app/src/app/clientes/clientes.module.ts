import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';
import { ClienteEditDialogComponent } from './pages/cliente-edit-dialog/cliente-edit-dialog.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ClientesComponent,
    ClienteNuevoComponent,
    ClienteEditDialogComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ClientesModule { }
