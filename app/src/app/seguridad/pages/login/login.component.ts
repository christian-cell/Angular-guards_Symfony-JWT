import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from '../../services/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( 
    private router : Router ,
    private seguridadService : SeguridadService
  ) { }

  ngOnInit(): void {
  }

  UserLog(form : NgForm ){
    let usuario = form.value;
    return this.seguridadService.LogUser(usuario)
  }

  IrACrearCliente(){
    this.router.navigate(['seguridad/registro'])
  }

  

}
