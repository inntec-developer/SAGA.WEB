import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Toast, ToasterConfig } from 'angular2-toaster/angular2-toaster';

import { RequisicionesService } from './../../../../../service/requisiciones/requisiciones.service';
import { SettingsService } from './../../../../../core/settings/settings.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-dialog-activar-requi',
  templateUrl: './dialog-activar-requi.component.html',
  styleUrls: ['./dialog-activar-requi.component.scss'],
  providers : [RequisicionesService] 
})
export class DialogActivarRequiComponent implements OnInit {

  constructor(
    private dialogReActivar : MatDialogRef<DialogActivarRequiComponent>,
    private _Router : Router,
    private _Route: ActivatedRoute,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service : RequisicionesService,
    private settings : SettingsService
  ) { }

  requisicion : any[];
  infoReactivarRequi : any;
  return: any;
  folio: number;

  //Configuracion de mensaje
  toaster: any;
  ToasterConfig: any;
  toasterconfig: ToasterConfig =  new ToasterConfig({
    positionClass: 'toast-bottom-right',
    limit: 7,
    tapToDismiss: false,
    showCloseButton: true,
    mouseoverTimerStop: true
  });
  //Creacion de mensaje
  popToast(type, title, body){
    var toast : Toast = {
      type:type,
      title: title,
      timeout: 2000,
      body: body
    }
    this.toasterService.pop(toast);
  }

  ngOnInit() {
    this.requisicion = this.data;
    this.folio = this.data.folio;
    this.infoReactivarRequi = {
      id : this.data.id,
      UsuarioMod: this.settings.user.name
    }
  }

  reActivarRequisicion(){
    this.service.reActivarRequisicion(this.infoReactivarRequi)
    .subscribe(data => {
      if(data == 200){
        this.popToast('success', 'Requisición', 'Se re-activo correctamente la requisicion.' + this.folio);
        this.dialogReActivar.close();
      }
      else{
        this.popToast('danger', 'Requisición','Oops!! No se puedo cancelar la requisición ' + this.folio);
      }
    })
  }

  onCloseDialog(){
    this.dialogReActivar.close();
  }
}
