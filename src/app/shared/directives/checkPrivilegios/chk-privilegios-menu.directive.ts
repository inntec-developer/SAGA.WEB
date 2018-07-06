import { Directive, HostBinding, HostListener, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ButtonDeleteComponent} from '../../../components/buttons/button-delete/button-delete.component';
@Directive({
  selector: '[chkPrivilegiosMenu]'
})
export class ChkPrivilegiosMenuDirective implements AfterViewInit {
  @ViewChild('delete') btnDelete: ButtonDeleteComponent;
  @HostBinding('hidden')
  hideRouterLink:boolean;

  constructor(private eltRef:ElementRef){}
  // @HostBinding('disabled')  isHidden: boolean = true;
  @HostListener('disabled', ['$event']) onclick(btn){
    let privilegios = JSON.parse(localStorage.getItem('privilegios'))
    console.log(privilegios)
    console.log(btn)
  
  }

  ngAfterViewInit(){ 

   console.log( this.eltRef.nativeElement);
  console.log(this.btnDelete)
   //how to get access to this private variable?
  //  console.log(this.routerLink.queryParams.component.routeData.data);
   //place for implementation of service:acl
  //  if(true) {
  //      let el : HTMLElement = this.eltRef.nativeElement;
  //      el.parentNode.removeChild(el);
  //  }
}

  
      
}
