import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AsignarRequisicionComponent } from './../../../components/asignar-requisicion/asignar-requisicion.component';
import { SettingsService } from '../../../core/settings/settings.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public userLog: boolean;
    private items:Array<any> = [];
    private placeHolderAsignar : string;
    private disabledAsignar : boolean;

    constructor(
        private _Route: ActivatedRoute,
        private settings : SettingsService
    ) { }

    ngOnInit() {
        this.placeHolderAsignar = 'Asignar a:'
        this.disabledAsignar = false;
    }
    
  public selected(value: any): void {
    debugger;
    console.log('Selected value is: ', value);
  }

  btnSaveFunction(){
      console.log('Se a Seleccionado el boton de SAVE');
  }
}
    