import { AfterContentChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CatalogosService, RequisicionesService } from '../../../../../service/index';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';

import { AsignarRequisicionComponent } from './../../../../../components/asignar-requisicion/asignar-requisicion.component';
import { SettingsService } from '../../../../../core/settings/settings.service';
import { UpdateRequisicion } from '../../../../../models/vtas/Requisicion'
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-update-info-requi',
  templateUrl: './update-info-requi.component.html',
  styleUrls: ['./update-info-requi.component.scss'],
  providers:[RequisicionesService,
              CatalogosService,
              {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
              {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
              {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
            ]
})
export class UpdateInfoRequiComponent implements OnInit, AfterContentChecked {
  @Input() Folios: any;
  @ViewChild('asginaciones') asignaciones: AsignarRequisicionComponent;
  public RequiId :string;
  public checked : boolean = false;
  public Prioridades : any[];
  public Estatus : any[];
  public requiUpdate : UpdateRequisicion;
  public return: any;
  public placeHolderSelect : string;
  public asignadosRequi :  any[] = [];
  public infoRequi : any[];

  public formRequi : FormGroup;


    constructor(
      private settings : SettingsService,
      public fb: FormBuilder,
      public serviceRequisicion: RequisicionesService,
      public serviceCatalogos: CatalogosService,
      private toasterService: ToasterService,
    ) {
        this.formRequi = new FormGroup({
          folio: new FormControl('',[Validators.required]),
          fch_Solicitud: new FormControl('',[Validators.required]),
          fch_Limite: new FormControl('',[Validators.required]),
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
         timeout:4000,
         body: body
       }
       this.toasterService.pop(toast);
     }

    ngOnInit() {
      this.placeHolderSelect = 'Asignar a: '
      this.getPrioridades();
      this.getEstatus(2);
      this.formRequi = this.fb.group({
        folio : [{value: '', disabled: true}],
        fch_Solicitud: [{value: '', disabled:true}],
        fch_Limite: [{value: '', disabled:true}],
        prioridad: [{value:''}, Validators.required ],
        fch_Cumplimiento: [{value: ''}, Validators.required],
        confidencial: [false],
        estatus: [{value:'',  disabled:true}]
      });
    }

    ngAfterContentChecked() {
      if(!this.checked){
        this.getInformacionRequisicio(this.Folios)
        
      }

    }
    getAsignacion(event){
      this.asignadosRequi = event;
    }

    public getInformacionRequisicio(folio){
      debugger;
      if(folio != null){
        this.serviceRequisicion.getRequiFolio(this.Folios)
          .subscribe(data => {
            this.asignadosRequi = data.asignados;
            this.infoRequi = data;
            this.asignaciones.getAsignados(this.asignadosRequi);
            this.RequiId = data.id;
            this.formRequi.patchValue({
              folio: data.folio,
              fch_Solicitud: data.fch_Creacion,
              fch_Limite: data.fch_Limite,
              prioridad: data.prioridad.id,
              estatus: data.estatus.id,
              fch_Cumplimiento: data.fch_Cumplimiento,
              confidencial: data.confidencial,
          });
            this.checked = true;
        });
      }
    }
    /*Cargar Formularios*/
    getPrioridades(){
      this.serviceCatalogos.getPrioridades()
        .subscribe(data => {
          this.Prioridades = data;
        })
    }
    getEstatus(tipoMov: number){
      this.serviceCatalogos.getEstatusRequi(tipoMov)
        .subscribe(data => {
          this.Estatus = data;
        });
    }
    /* Save Requisicion */
    Save(){
      let asg = [];
      if(this.asignadosRequi.length > 0){

        for(let a of this.asignadosRequi){
          asg.push({
            RequisicionId: this.RequiId,
            GrpUsrId : a,
            CRUD : '',
            UsuarioAlta : localStorage.getItem('usuario'),
            UsuarioMod : localStorage.getItem('usuario'),
            fch_Modificacion : new Date()
          });
        };
      }


      var update = {
          id: this.RequiId,
          folio :  this.formRequi.get('folio').value,
          prioridadId : this.formRequi.get('prioridad').value,
          fch_Cumplimiento : this.formRequi.get('fch_Cumplimiento').value,
          estatusId : this.formRequi.get('estatus').value,
          confidencial : this.formRequi.get('confidencial').value,
          usuario : this.settings.user.name,
          asignacionRequi: asg
      }
      this.requiUpdate = update;
      console.log(this.requiUpdate);
      this.serviceRequisicion.updateRequisicion(this.requiUpdate)
        .subscribe(data => {
          console.log(data);
          this.return = data;
          if(this.return == 200){
            this.popToast('success', 'Requisicion','La requisición se actualizo correctamente ');
          }
          else{
              this.popToast('error', 'Oops!!','Algo salio mal intente de nuevo' );
          }
        });
    }
}
