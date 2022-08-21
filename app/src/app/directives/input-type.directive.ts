import { Directive, ElementRef } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';

@Directive({
  selector: '[toggle]'
})

export class InputTypeDirective {

  private _shown = false;

  constructor(private el: ElementRef) {
    this.setUp();
    /* const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = 'show';
    span.addEventListener('click', () => {
      this.toggle(span);
    });
    parent.appendChild(span); */
  }

  /* toggle(span: HTMLElement) {
    console.log(span);
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = 'hide';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = 'show';
    }
  } */

  toggle(span:HTMLElement){
    this._shown = !this._shown;

    if(this._shown){
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = '  <span class="material-icons">remove_red_eye</span> ';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = ' <span class="material-icons">remove_red_eye</span> ';
    }
  }
 
  setUp(){
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = `<span class="material-icons">remove_red_eye</span>`
    span.addEventListener('click',()=>{
      this.toggle(span);
    })
    parent.appendChild(span);

    
  }


}