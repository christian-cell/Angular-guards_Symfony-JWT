import { Component,  EventEmitter,  Input,  OnInit, Output  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/productos/services/productos.service';

@Component({
  selector: 'app-producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.scss']
})
export class ProductoNuevoComponent implements OnInit {

  

  productosFormulario = new FormGroup({

    nombre : new FormControl('' , [Validators.required]),
    descripcion : new FormControl('' , [Validators.required]),
    precio : new FormControl('' , [Validators.required]),
    codigo_barras : new FormControl('' , [Validators.required]),
    fabricante : new FormControl('' , [Validators.required])

  })
  
  @Input('familia_producto') familia_producto ? :string
  @Output() CrearProducto : EventEmitter<any> = new EventEmitter;

  constructor( 
    // private productosService : ProductosService, 
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  MandarCrearProducto(){
    
    if(this.productosFormulario.status === 'VALID'){

      this.CrearProducto.emit(this.productosFormulario.value);

    }else{
      console.log('formalario invalido');
    }

  }

}
