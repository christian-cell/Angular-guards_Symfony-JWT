import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes:any;

  constructor(

    private clientesService : ClientesService

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

  IrEditarDialog(id:number){

  }

  BorrarCliente(id:number){
    
  }

}
