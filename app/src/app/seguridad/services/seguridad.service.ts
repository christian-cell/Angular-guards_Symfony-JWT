import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  userLogin ? : Subject<any>

  constructor( 
    private http : HttpClient ,
    private router : Router
  ) {
    this.userLogin = new Subject()
  }

  /* CheckIfExist(email:any){
    return this.http.get(environment.url + 'registro/userChecker/' + email)
  } */

  CreateUser(body:any){
    

    return this.http.post(environment.url + 'api/registro/nuevo' , body , {responseType:'text'})
    .toPromise().then((data:any)=>{
      console.log(data);
    })

  }

  CreateUserByGet(username:any , password:any){
    

    return this.http.get(environment.url + 'api/registro/nuevo/get/' + username + '/' + password , {responseType:'text'})

  }

  LogUser(body:any){

    return this.http.post(environment.url + 'api/login_check' , body)
    .toPromise().then((res:any)=>{

      /* return res.token; */
      
      if(res){
        if(res.token){
          if(typeof(res.token) === 'string'){
            window.localStorage.setItem('token',res.token);
            
            this.router.navigate(['clientes']);
          }
        }
      } 
    })
  }
}
