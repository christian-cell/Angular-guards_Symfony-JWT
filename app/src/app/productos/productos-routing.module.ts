import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoNuevoComponent } from './pages/producto-nuevo/producto-nuevo.component';

const routes : Routes=[
  
  {
    path:'',
    children:[
      {
        path:'listProductos' , component : ProductosComponent
      },
      {
        path:'productonuevo' , component : ProductoNuevoComponent
      },
      {
        path:'**' , redirectTo :'listProductos' , pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductosRoutingModule { }
