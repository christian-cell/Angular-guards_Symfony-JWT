import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad/services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuard implements CanActivate {
  
  constructor( private router: Router , private seguridadService:SeguridadService) {}
  
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(window.localStorage.getItem('token'));  
    if(window.localStorage.getItem('token')){
      this.seguridadService.userLogin?.next('LOGGED');
      return true;
    }else {
      console.log('sin token');
      this.router.navigate(['seguridad/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
    
    
  }
  
}
