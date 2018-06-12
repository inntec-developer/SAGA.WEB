import { ActivatedRoute, Router } from '@angular/router';
import { BodyOutputType, Toast, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

import { RequisicionesService } from './../../../../../service/requisiciones/requisiciones.service';
import { SettingsService } from './../../../../../core/settings/settings.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-dialog-delete-requi',
  templateUrl: './dialog-delete-requi.component.html',
  styleUrls: ['./dialog-delete-requi.component.scss'],
  providers: [RequisicionesService]
})
export class DialogDeleteRequiComponent implements OnInit {
  constructor(
    private dialogDelete: MatDialogRef<DialogDeleteRequiComponent>,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: RequisicionesService,
    private setings: SettingsService
  ) { }
   //Varibales de contol 
   requisicion : any[];
   infoDeleteRequi: any;
   return: any;
   folio: number;
  
   

   //Configuracion de mensaje
   toaster: any;
  toasterConfig: any;
  toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-right',
    limit: 7,tapToDismiss: false,
    showCloseButton: true,
    mouseoverTimerStop: true,
  });
  //Creacion de mensaje
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
    this.requisicion = this.data;
    this.folio = this.data.folio;
    this.infoDeleteRequi = {
      Id: this.data.id,
      UsuarioMod: this.setings.user.name
    }
    console.log(this.infoDeleteRequi);
  }

  deleteRequisicion(){
    this.service.deleteRequisicion(this.infoDeleteRequi)
    .subscribe(data => {
      console.log(data);
      debugger;
      if(data == 200){
        this.popToast('success', 'Requisicion','Se elimino correctamente la requisición ' + this.folio);
        this.dialogDelete.close();
      }
      else{
        this.popToast('danger', 'Requisicion','No se puedo eliminar la requisición ' + this.folio);
      }
    });
  }

  onCloseDialog(){
    this.dialogDelete.close();
  }

}