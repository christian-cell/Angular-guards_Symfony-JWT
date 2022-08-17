import { ChangeDetectorRef , Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  mobileQuery ! : MediaQueryList;

  fillerNav = [
    { name:'clientes' , route:'clientes' , icon:'people' },
    { name:'Cliente Nuevo' , route:'clientes/nuevo' , icon:'person_add' },
    { name:'productos' , route:'productos' , icon:'category' },
    { name:'Producto Nuevo' , route:'productos/nuevo' , icon:'exposure_plus_1' }  
  ]

  private _mobileQueryListener : any;
  constructor(
    changeDetectorRef : ChangeDetectorRef,
    media : MediaMatcher
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

}
