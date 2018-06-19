import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ButtonSaveComponent } from '../buttons/button-save/button-save.component';
import { ComponentsService } from './../../service/Components/components.service';

@Component({
  selector: 'app-asignar-requisicion',
  templateUrl: './asignar-requisicion.component.html',
  styleUrls: ['./asignar-requisicion.component.scss'],
  providers: [ComponentsService]
})
export class AsignarRequisicionComponent implements OnInit {
  //Variables de entrada
  @Input() disabledSelect: boolean;
  @Input() placeHolder: string;
  //Variables de Salida
  @Output()
  Asignacacion : EventEmitter<any[]> = new EventEmitter();


  public items: any[] = []
  
  public asignacionCtrl : any[];
  public allowClear : boolean = true;
 
  constructor(
    private serviceComponents : ComponentsService
  ) { 
  }

  ngOnInit() {
   this.serviceComponents.getUserGroup()
    .subscribe(data =>{
      this.items = data;
      console.log(this.items);
    });
    
  }

  valueChange(asignacion){
    this.Asignacacion.emit(asignacion);
    console.log(asignacion);
  }
}
