import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/models/productos/productoModel';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent  {


  // Each Column Definition results in one Column.
  tipo_producto : string = 'calzado';
  
  public columnDefs: ColDef[] = [
    {field:'id', resizable:true , width:85  },
    {field:'nombre', resizable:true , width:85  },
    {field:'descripcion', resizable:true , width:85  },
    {field:'precio' , resizable:true , width:85 },
    {field:'fabricante', resizable:true , width:85  },
    {field:'codigo_barras', resizable:true , width:85  }, 
    {field:'id_fabricante', resizable:true , width:85}
  ]; 

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$ : any;/*  = [
    {
      car:'ford',
      year:1998,
      model:'escort'  
    },
    {
      car:'peugeot',
      year:1998,
      model:'506'  
    }
  ] */
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor( private productosService : ProductosService ) { }

  ngOnInit(): void {
    this.CargarProductos();
  }

  CargarProductos(){
    console.log('vamos a cargar los productos');
    this.productosService.CargarProductos().subscribe(( res:any )=>{
      console.log(res);
      this.rowData$ = [];
      this.rowData$ = res;
    })
  }

  // Example load data from sever
 /* onGridReady(params: GridReadyEvent) {
  this.rowData$ = this.http
    .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  } */

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  CrearProducto(producto:any){
    console.log(producto);

    return this.productosService.CreateProduct(producto);
  }

}
