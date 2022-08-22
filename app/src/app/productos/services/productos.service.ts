import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http : HttpClient ) { }

  CreateProduct(body:any){
    return this.http.post(environment.url + 'api/productos/new' , body , {responseType:'text'}).
    toPromise().then((res:any)=>{
      console.log(res);
    })
  }

  CargarProductos(){
    return this.http.get(environment.url + 'api/productos/list');
  }
}
