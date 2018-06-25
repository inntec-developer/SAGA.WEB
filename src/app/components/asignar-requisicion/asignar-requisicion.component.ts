import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ComponentsService } from './../../service/Components/components.service';

@Component({
  selector: 'app-asignar-requisicion',
  templateUrl: './asignar-requisicion.component.html',
  styleUrls: ['./asignar-requisicion.component.scss'],
  providers: [ComponentsService]
})
export class AsignarRequisicionComponent implements OnInit {
  //Formulario
  public AsignacionForm : FormGroup;
  //Variables de entrada
  @Input() placeHolder: string;
  @Input() Asignados: any[];
  //Variables de Salida
  
  @Output()
  Asignacion : EventEmitter<any[]> = new EventEmitter();

   public items: any[] = []
  
  public asignacionCtrl : any[];
  public allowClear : boolean = true;
  constructor(
    private serviceComponents : ComponentsService
  ) { 
    //Inicializar el formulario con el nombre del control
    this.AsignacionForm = new FormGroup({
      selectControl: new FormControl({value: '', disabled:false})
    });
  }

  ngOnInit() {
   this.serviceComponents.getUserGroup()
    .subscribe(data =>{
      this.items = data;
    });
    // this.Asignados = ["83569bac-0d68-e811-80e1-9e274155325e", "17e98c73-2668-e811-80e1-9e274155325e", "72bcc66f-3668-e811-80e1-9e274155325e"];
    //Muestra los valores almacenados en base de datos, si es que ya tiene información.
    this.AsignacionForm.patchValue({
      selectControl: this.Asignados
    });
  }
  
  valueChange(obj){ 
    this.Asignacion.emit(this.AsignacionForm.get('selectControl').value);
  }

  
}
