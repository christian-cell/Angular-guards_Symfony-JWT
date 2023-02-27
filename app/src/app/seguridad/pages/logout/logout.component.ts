import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  isLogged ? : Subject<any>;

  constructor( private router : Router ) {
    this.isLogged = new Subject()
  }

  ngOnInit(): void {
    this.Logout();
  }

  Logout(){
    window.localStorage.removeItem('token');
    
    this.router.navigate(['seguridad/login']);
  }
}
