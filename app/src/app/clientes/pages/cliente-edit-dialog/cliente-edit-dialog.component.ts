import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteModel } from 'src/app/models/clientes/clienteModel';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-edit-dialog',
  templateUrl: './cliente-edit-dialog.component.html',
  styleUrls: ['./cliente-edit-dialog.component.scss']
})
export class ClienteEditDialogComponent implements OnInit {

  @Input() cliente: ClienteModel = new ClienteModel();
  // @Input() cliente: Item = new Item();

  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any /* DialogData */ ,
    private clientesService : ClientesService,
    public dialogRef: MatDialogRef<ClienteEditDialogComponent>
  ) { }

  ngOnInit(): void {
    this.GetCliente(this.data.id);
  }

  GetCliente(id:number){
    console.log(id);
    this.clientesService.GetCliente(id).subscribe((res: any) => {
      this.cliente = res;
      console.log(this.cliente); 
    });
  }

  EditCliente(form : NgForm){
    let cliente = form.value;
    console.log(cliente);
    this.clientesService.EditCliente(cliente , this.data.id).subscribe((res:any)=>{
      console.log(res);
      if(res === 'cliente actualizado'){
        this.closeDialog();
      }
    })
  }

  closeDialog() {
    this.dialogRef.close('cliente actualizado');
  }

}
