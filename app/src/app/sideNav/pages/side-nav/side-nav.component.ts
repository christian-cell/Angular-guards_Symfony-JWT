import { ChangeDetectorRef , Component, OnInit, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SeguridadService } from 'src/app/seguridad/services/seguridad.service';
import { LogoutComponent } from 'src/app/seguridad/pages/logout/logout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit , AfterViewInit /*,  OnChanges , AfterViewInit , AfterViewChecked , AfterContentChecked */{

  mobileQuery ! : MediaQueryList;

  isLogged ? :Boolean = false;

  fillerNav = [
    { name:'clientes' , route:'clientes' , icon:'people' },
    { name:'Cliente Nuevo' , route:'clientes/nuevo' , icon:'person_add' },
    { name:'productos' , route:'productos' , icon:'category' },
    { name:'Producto Nuevo' , route:'productos/nuevo' , icon:'exposure_plus_1' },
    { name:'LogOut' , route:'seguridad/logout' , icon:'exposure_plus_1' }  
  ]

  private _mobileQueryListener : any;
  constructor(
    changeDetectorRef : ChangeDetectorRef,
    media : MediaMatcher,
    private seguridadService : SeguridadService,
    private logoutComponent : LogoutComponent,
    private changeDetector: ChangeDetectorRef,
    private router : Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width:600px)');
    this._mobileQueryListener = ()=> changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener)
  }

  ngOnDestroy():void{
    if(this.mobileQuery.removeAllListeners){
      this.mobileQuery.removeAllListeners(this._mobileQueryListener)
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    /* NOS SUBSCRIBIMOS A LAS OBSERVABLES PARA VER SI PINTAMOS EL SIDENAV O NO */

    this.logoutComponent.isLogged?.subscribe((res:string)=>{
      console.log(res);
      this.router.navigate(['seguridad/login']);
      if(res === 'NO_LOGGED')Promise.resolve().then(()=>this.isLogged= false);
      
    })

    this.seguridadService.userLogin!.subscribe((res:string) => {
      console.log(res);
      if(res === 'LOGGED')this.isLogged = true ;
    })
  }

  

}
