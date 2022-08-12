import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor( 
    private http : HttpClient ,
    private router : Router
  ) { }

 

  LogUser(body:any){

    


    return this.http.post(environment.url + 'api/login_check' , body)
    .toPromise().then((res:any)=>{
      
      if(res){
        if(res.token){
          if(typeof(res.token) === 'string'){
            window.localStorage.setItem('token',res.token);
            this.router.navigate(['clientes'])
          }
        }
      }
    })
  }
}
