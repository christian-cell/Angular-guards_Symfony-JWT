import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from '../../services/seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(
    private router : Router,
    private seguridadService : SeguridadService
  ) { }

  ngOnInit(): void {
  }

  UserRegister(form : NgForm ){
    let cliente = form.value;
    // return this.seguridadService.CreateUser(cliente),this.router.navigate(['seguridad/login'])
    this.seguridadService.CreateUserByGet(cliente.email , cliente.password).subscribe((res:any)=>{
      console.log(res)
    })
  }

  IrALogin(){
    this.router.navigate(['seguridad/login'])
  }

}
