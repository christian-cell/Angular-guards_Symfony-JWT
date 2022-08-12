import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes : Routes = [
  {
    path:'',
    children:[
      {
        path:'registro' , component : RegistroComponent
      },
      {
        path:'login' , component : LoginComponent
      },
      {
        path:'**' , redirectTo :'login'
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
export class SeguridadRoutingModule { }
