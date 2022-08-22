import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoNuevoComponent } from './pages/productos/producto-nuevo/producto-nuevo.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductoNuevoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
    
  ]
})
export class ProductosModule { }
