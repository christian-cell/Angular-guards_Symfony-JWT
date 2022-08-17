import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LogoutComponent } from './pages/logout/logout.component';

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
        path:'logout' , component : LogoutComponent
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
