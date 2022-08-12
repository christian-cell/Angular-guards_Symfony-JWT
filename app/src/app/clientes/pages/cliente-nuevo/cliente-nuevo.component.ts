import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html',
  styleUrls: ['./cliente-nuevo.component.scss']
})
export class ClienteNuevoComponent implements OnInit {

  constructor( 
    private clientesService : ClientesService, 
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  CrearCliente(form : NgForm){
    console.log(form.value);
    let cliente = form.value;
    return this.clientesService.CreateCliente(cliente),this.router.navigate(['clientes/list']);
  }

}
