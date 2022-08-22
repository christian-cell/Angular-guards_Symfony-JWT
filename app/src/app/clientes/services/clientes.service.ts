import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http : HttpClient) { }

  CreateCliente(body:any){
    

    return this.http.post(environment.url + 'api/clientes/nuevo' , body , {responseType:'text'})
    .toPromise().then((data:any)=>{
      console.log(data);
    })

  }

  GetClientes(){
    
    return this.http.get(environment.url + 'api/clientes/list' /* , requestOptions */);
  }

  GetCliente(id:number){
    return this.http.get(environment.url + 'api/clientes/' + id /* , {responseType:'text'} */)
  }

  EditCliente(cliente:any , id:number){
    return this.http.put(environment.url + 'api/clientes/' + id , cliente , {responseType:'text'})
    
  }

  DeleteCliente(id:any){
    return this.http.delete(environment.url + 'api/clientes/delete/' + id,  {responseType:'text'})

    // .subscribe(() => this.status = 'Delete successful');
  }

}
