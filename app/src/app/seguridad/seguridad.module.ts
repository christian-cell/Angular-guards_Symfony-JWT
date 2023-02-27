
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { LogoutComponent } from './pages/logout/logout.component';
import { InputPasswordModule } from '../directives/input-password/input-password.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    InputPasswordModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ]
})
export class SeguridadModule { }
