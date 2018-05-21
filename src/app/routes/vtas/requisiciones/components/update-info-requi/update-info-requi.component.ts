import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
//Servicios
import { CatalogosService, RequisicionesService } from '../../../../../service/index';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatTableDataSource, PageEvent} from '@angular/material';

import { NgxSpinnerService } from 'ngx-spinner';
//Models
import { UpdateRequisicion } from '../../../../../models/vtas/Requisicion'

@Component({
  selector: 'app-update-info-requi',
  templateUrl: './update-info-requi.component.html',
  styleUrls: ['./update-info-requi.component.scss'],
  providers: [RequisicionesService, CatalogosService]
})
export class UpdateInfoRequiComponent implements OnInit {
  @Input() Folios: string;
  public RequiId :string;
  public checked : boolean = false;
  public Prioridades : any[];
  public Estatus : any[];
  public requiUpdate : UpdateRequisicion;
  public return: string;

  public formRequi : FormGroup;


    constructor(
      public fb: FormBuilder,
      public serviceRequisicion: RequisicionesService,
      public serviceCatalogos: CatalogosService,
      private toasterService: ToasterService,
    ) {
        this.formRequi = new FormGroup({
          folio: new FormControl('',[Validators.required]),
          fch_Solicitud: new FormControl('',[Validators.required]),
          prioridad: new FormControl('',[Validators.required]),
          fch_Cumplimiento: new FormControl('',[Validators.required]),
          confidencial: new FormControl(),
          estatus:  new FormControl('',[Validators.required]),
        });
     }

     //------------------------------------------------------------------------------------
     // Toasts (Mensajes del sistema)
     //------------------------------------------------------------------------------------
     toaster: any;
     toasterConfig: any;
     toasterconfig: ToasterConfig = new ToasterConfig({
       positionClass: 'toast-bottom-right',
       limit: 7,tapToDismiss: false,
       showCloseButton: true,
       mouseoverTimerStop: true,
     });

     popToast(type, title, body ) {

       var toast : Toast = {
         type: type,
         title: title,
         timeout:2000,
         body: body
       }
       this.toasterService.pop(toast);
     }

    ngOnInit() {
      this.getPrioridades();
      this.getEsattus(2);
      this.formRequi = this.fb.group({
        folio : [{value: '', disabled: true}],
        fch_Solicitud: [{value: '', disabled:true}],
        prioridad: [{value:''}, Validators.required ],
        fch_Cumplimiento: [{value: ''}, Validators.required],
        confidencial: [false],
        estatus: [{value:''}, Validators.required ]
      });
    }

    ngAfterContentChecked(){
      if(this.Folios != null && this.checked == false ){
        this.checked = true;
        this.getInitialData();
      }
    }

    getInitialData(){
      this.serviceRequisicion.getRequiFolio(this.Folios)
        .subscribe(DataRequisicion => {
          this.RequiId = DataRequisicion.id;
          this.formRequi.patchValue({
            folio: DataRequisicion.folio,
            fch_Solicitud: DataRequisicion.fch_Creacion,
            prioridad: DataRequisicion.prioridad.id,
            estatus: DataRequisicion.estatus.id,
            fch_Cumplimiento: DataRequisicion.fch_Cumplimiento,
            confidencial: DataRequisicion.confidencial,

        });
      });
    }

    getPrioridades(){
      this.serviceCatalogos.getPrioridades()
        .subscribe(data => {
          this.Prioridades = data;
        })
    }

    getEsattus(tipoMov: number){
      this.serviceCatalogos.getEstatusRequi(tipoMov)
        .subscribe(data => {
          this.Estatus = data;
        });
    }

    Save(){
      var update = {
          id: this.RequiId,
          folio :  this.formRequi.get('folio').value,
          prioridadId : this.formRequi.get('prioridad').value,
          fch_Cumplimiento : this.formRequi.get('fch_Cumplimiento').value,
          estatusId : this.formRequi.get('estatus').value,
          confidencial : this.formRequi.get('confidencial').value
      }
      this.requiUpdate = update;
      this.serviceRequisicion.updateRequisicion(this.requiUpdate)
        .subscribe(data => {
          this.return = data;
          if(this.return){
            this.popToast('success', 'Requisicion','Actualizacion de información Folio: ' + data.folio);
          }
          else{
              this.popToast('error', 'Oops!!','Algo salio mal intente de nuevo' );
          }
        });
    }

}
