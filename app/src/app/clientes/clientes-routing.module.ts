import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'list' , component : ClientesComponent
      },
      {
        path:'nuevo' , component : ClienteNuevoComponent
      },
      {
        path:'**' , redirectTo :'list'
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
export class ClientesRoutingModule { }
