import { Component, OnInit , Inject, OnChanges, SimpleChanges, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { FormGroup, FormControl, ReactiveFormsModule, NgForm, Validator } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster/angular2-toaster';
//Services
import { RequisicionesService } from '../../../../../service/index';


@Component({
  selector: 'app-dialogdamfo',
  templateUrl: './dialogdamfo.component.html',
  styleUrls: ['./dialogdamfo.component.scss'],
  providers:[RequisicionesService]
})
export class DialogdamfoComponent implements OnInit, OnChanges {
  IdDamfo: string;
  formDireccion :  FormGroup;
  @Input() IdDireccion: string;
  constructor(
    public dialogRef: MatDialogRef<DialogdamfoComponent>,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: RequisicionesService
  ) {

  }

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
    this.IdDamfo = this.data.id;
    this.formDireccion =  new FormGroup({
      direccion: new FormControl()
    })

  }

  FiltroDireccion(event){
    this.IdDireccion = event;
  }

  ngOnChanges(change: SimpleChanges){
    if(change.IdDireccion && !change.IdDireccion.isFirstChange()){
      alert(this.IdDireccion);
    }
  }

  onNoClick(){
    this.dialogRef.close();
  }

  createRequisicion(){
    if(this.IdDireccion != null){
      this._Router.navigate(['/ventas/requisicionNueva', this.IdDamfo, this.IdDireccion], {skipLocationChange:true});
      this.onNoClick();
    }else{
      this.popToast('error', 'Oops!!','Seleccione una dirección para continuar' );
    }

  }

}
