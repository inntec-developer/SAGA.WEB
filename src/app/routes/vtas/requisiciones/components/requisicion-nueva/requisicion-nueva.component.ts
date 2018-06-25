import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { CatalogosService, RequisicionesService } from '../../../../../service/index';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { CreateRequisicion } from '../../../../../models/vtas/Requisicion';
import { NgxSpinnerService } from 'ngx-spinner';
import { SettingsService } from '../../../../../core/settings/settings.service';
import { UpdateInfoRequiComponent } from '../update-info-requi/update-info-requi.component';
import {UpdateRequisicionComponent}  from '../update-requisicion/update-requisicion.component';

//Components


//Servicios

//Models


@Component({
  selector: 'app-requisicion-nueva',
  templateUrl: './requisicion-nueva.component.html',
  styleUrls: ['./requisicion-nueva.component.scss'],
  providers:[CatalogosService, RequisicionesService]
})
export class RequisicionNuevaComponent implements OnInit {

  public formCliente : FormGroup;
  public formRecl : FormGroup;
  public formContrato : FormGroup;
  public formPerfil : FormGroup;
  public formSueldo : FormGroup;

  public damfoId: string;
  public direccionId: string;
  public requisicionId: string;
  public folio: any[];
  public createRequi: boolean;
  public dataRequisicion : any[];

  constructor(
    private setings : SettingsService,
    private serviceCatalogo: CatalogosService,
    private serviceRequisiciones: RequisicionesService,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.spinner.show();
      this._Route.params.subscribe(params => {
        if(params['IdDamfo'] != null && params['IdDireccion'] != null){
          this.damfoId = params['IdDamfo'];
          this.direccionId = params['IdDireccion']
          this.createRequi = true;
        }else{
          this.createRequi = false;
        }
        if(this.createRequi){
          this.createRequisicion();
        }
      });
  }

  createRequisicion(){
    let datas: CreateRequisicion = new CreateRequisicion();
    datas.IdDamfo = this.damfoId;
    datas.IdAddress = this.direccionId;
    datas.Usuario = this.setings.user.name;
    this.serviceRequisiciones.createNewRequi(datas)
      .subscribe(data => {
        this.requisicionId = data.id;
        this.folio = data.folio;
      })
  }
}
