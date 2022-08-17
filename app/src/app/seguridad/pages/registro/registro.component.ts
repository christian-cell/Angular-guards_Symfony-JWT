import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from '../../services/seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  resultado!: string;

  @ViewChild("passwordInput") passwordInput !: ElementRef;

  /* /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g */

  formularioRegistro = new FormGroup({
    username : new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

    /* 
      PASSWORD
      At least 8 characters in length
      Lowercase letters
      Uppercase letters
      Numbers
      Special characters
    */
    password : new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ])
  });


  constructor(
    private router : Router,
    private seguridadService : SeguridadService
  ) { }

  ngOnInit(): void {
    console.log(this.passwordInput)
  }

  ToggelPasswordView()
  {/* 
    console.log(this.passwordInput.nativeElement.type)
    if(this.passwordInput.nativeElement.type === 'text'){
      this.passwordInput.nativeElement.type = 'password';
      console.log(this.passwordInput.nativeElement.type)

    }
    if(this.passwordInput.nativeElement.type === 'password'){
      this.passwordInput.nativeElement.type = 'text';
      console.log(this.passwordInput.nativeElement.type)

    } */
  }

  

  UserRegister(){
    
    console.log(this.formularioRegistro);

    if (this.formularioRegistro.valid){

      console.log(this.formularioRegistro.value);

      this.seguridadService.CreateUser(this.formularioRegistro.value);

      /* this.seguridadService.CreateUserByGet(this.formularioRegistro.value.email ,this.formularioRegistro.value.password)
      .subscribe((res:any)=>{
        console.log(res);

        if(res === 'USUARIO YA REGISTRADO'){
          this.resultado = res;
          setTimeout(() => {
            this.resultado = '';
          }, 5000);
        }else{
          this.router.navigate(['seguridad/login']);
        }
        
      }) */
      
      // let cliente = this.formularioRegistro.value;
    }else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
      
  
    
    
  }

  IrALogin(){
    this.router.navigate(['seguridad/login'])
  }

}
