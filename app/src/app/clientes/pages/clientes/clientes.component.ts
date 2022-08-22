import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ClienteEditDialogComponent } from '../cliente-edit-dialog/cliente-edit-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes:any;

  constructor(
    private clientesService : ClientesService,
    private router : Router,
    public dialog: MatDialog,
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

  EditCliente(id:any) {
    this.dialog.open(ClienteEditDialogComponent, {
      data: {
        id: id,
      },
    }).afterClosed()
    .subscribe((res) => {
      console.log(res);
      this.GetClientes();
    });
  }

  LogOut(){
    console.log('vamos a deslogearnos');
    window.localStorage.removeItem('token');
    this.router.navigate(['seguridad/login']);
  }

  

  BorrarCliente(id:number){
    this.clientesService.DeleteCliente(id).subscribe((res:any)=>{
      console.log(res);
      this.GetClientes();
    })
    
  }

}
