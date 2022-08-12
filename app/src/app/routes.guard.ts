import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuard implements CanActivate {
  
  constructor( private router: Router) {}
  
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(window.localStorage.getItem('token'));  
    if(window.localStorage.getItem('token')){
      return true;
    }else {
      this.router.navigate(['seguridad/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
    
    
  }
  
}
