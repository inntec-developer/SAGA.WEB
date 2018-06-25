import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../../core/settings/settings.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public userLog: boolean;
    private items:Array<any> = [];
    //Mandar a componente asignarRequi
    private placeHolderAsignar : string;
    private disabledAsignar : boolean;
    private asignados: any[] = [];
    //Recupera la informacion mandada de asignarRequi
    private asignacion: any[] = [];
    

    constructor(
        private _Route: ActivatedRoute,
        private settings : SettingsService
    ) {

        this.asignacion = ["83569bac-0d68-e811-80e1-9e274155325e", "17e98c73-2668-e811-80e1-9e274155325e", "72bcc66f-3668-e811-80e1-9e274155325e"]
     }

    ngOnInit() {
        //Iniciliza variables para mandar a asignarRequi
       
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

  getAsgiancion(event){
      this.asignacion = event;
      console.log('asignados desde home: ');
      console.log(this.asignacion)
  }
}
    