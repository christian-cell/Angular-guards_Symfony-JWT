import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  UserRegister(form : NgForm ){

  }

  IrALogin(){
    this.router.navigate(['seguridad/login'])
  }

}
