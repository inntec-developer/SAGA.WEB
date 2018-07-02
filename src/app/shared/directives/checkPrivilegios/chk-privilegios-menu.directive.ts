import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';

@Directive({
  selector: '[chkPrivilegiosMenu]'
})
export class ChkPrivilegiosMenuDirective implements OnInit {

  constructor(private el: ElementRef, private renderer : Renderer2, public settings: SettingsService) {
   
   }
   ngOnInit(){
    
    let privilegios = this.settings.user.privilegios;
    privilegios.forEach(element => {
      if(element.estructuraId === 1)
      {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
        console.log(this.settings.user)
      }
      else
      {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      }
      
    });
   
   }

}
