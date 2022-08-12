import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes:any;

  constructor(
    private clientesService : ClientesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.GetClientes();
  }

  GetClientes(){
     this.clientesService.GetClientes().subscribe(  (res:any)=>{
      console.log(res);
      this.clientes = res;
     }  )
  }

  LogOut(){
    console.log('vamos a deslogearnos');
    window.localStorage.removeItem('token');
    this.router.navigate(['seguridad/login']);
  }

  IrEditarDialog(id:number){

  }

  BorrarCliente(id:number){
    
  }

}
