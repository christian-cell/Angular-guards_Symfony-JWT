import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    // const token: string = localStorage.getItem('token');

    let request = req;

    if (window.localStorage.getItem('token')) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ window.localStorage.getItem('token') }`
        }
      });
    }

    return next.handle(request);
  }
}
