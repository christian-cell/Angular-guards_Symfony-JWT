import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from '../../services/seguridad.service';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  resultado!: string;

  formularioLogin = new FormGroup({
    username : new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

    /* 
      PASSWORD
      At least 8 characters in length
      Lowercase letters
      Uppercase letters
      Numbers
      Special characters
    */
    password : new FormControl('', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });
  
  constructor( 
    private router : Router ,
    private seguridadService : SeguridadService,
    private logoutComponent : LogoutComponent
  ) { }



  ngOnInit(): void {
    this.logoutComponent.isLogged!.next('NO_LOGGED')
  }

  UserLog(/* form : NgForm */ ){
    // let usuario = form.value;

    if (this.formularioLogin.valid){

      console.log(this.formularioLogin.value);

      return this.seguridadService.LogUser(this.formularioLogin.value)/* ,console.log(window.localStorage.getItem('token')); */
            
      
      // let cliente = this.formularioRegistro.value;
    }else{
      this.resultado = "Hay datos inválidos en el formulario";
      return false;
    }


  }

  IrACrearCliente(){
    this.router.navigate(['seguridad/registro'])
  }

  

}
