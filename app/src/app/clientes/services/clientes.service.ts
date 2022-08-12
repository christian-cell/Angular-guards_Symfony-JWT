import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
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

    let token = window.localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    const requestOptions = { headers: headers };
    
    return this.http.get(environment.url + 'api/clientes/list' , requestOptions);
  }

}
