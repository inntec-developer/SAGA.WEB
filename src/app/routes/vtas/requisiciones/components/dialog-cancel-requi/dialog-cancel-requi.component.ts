import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Toast, ToasterConfig } from 'angular2-toaster/angular2-toaster';

import { RequisicionesService } from './../../../../../service/requisiciones/requisiciones.service';
import { SettingsService } from './../../../../../core/settings/settings.service';
import { ToasterService } from 'angular2-toaster';
import { providers } from 'ng2-dnd';

@Component({
  selector: 'app-dialog-cancel-requi',
  templateUrl: './dialog-cancel-requi.component.html',
  styleUrls: ['./dialog-cancel-requi.component.scss'],
  providers : [RequisicionesService] 
})
export class DialogCancelRequiComponent implements OnInit {

  constructor(
    private dialogCancel : MatDialogRef<DialogCancelRequiComponent>,
    private _Router : Router,
    private _Route: ActivatedRoute,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service : RequisicionesService,
    private settings : SettingsService
  ) { }

  //Varibales de control
  requisicion : any[];
  infoCancelRequi : any;
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
    this.infoCancelRequi = {
      id : this.data.id,
      UsuarioMod: this.settings.user.name
    }
    console.log(this.infoCancelRequi);
  }

  cancelRequisicion(){
    this.service.cancelRequisicion(this.infoCancelRequi)
    .subscribe(data => {
      if(data == 200){
        this.popToast('success', 'Requisición', 'Se cacelo correctamente la requisicion.' + this.folio);
        this.dialogCancel.close();
      }
      else{
        this.popToast('danger', 'Requisición','Oops!! No se puedo cancelar la requisición ' + this.folio);
      }
    })
  }

  onCloseDialog(){
    this.dialogCancel.close();
  }

}
