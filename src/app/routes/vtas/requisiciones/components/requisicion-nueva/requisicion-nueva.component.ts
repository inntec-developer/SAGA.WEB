import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
//Components
import {UpdateRequisicionComponent}  from '../update-requisicion/update-requisicion.component';
import { UpdateInfoRequiComponent } from '../update-info-requi/update-info-requi.component';
//Servicios
import { CatalogosService, RequisicionesService } from '../../../../../service/index';
//Models
import { CreateRequisicion } from '../../../../../models/vtas/Requisicion';

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
  public requisicion: any[];
  public createRequi: boolean;
  public dataRequisicion : any[];

  constructor(
    private serviceCatalogo: CatalogosService,
    private serviceRequisiciones: RequisicionesService,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.formCliente = this.fb.group({
      nombrecomercial: [{value: '', disabled:true}],
      razonSocial: [{value: '', disabled:true}],
      rfc: [{value: '', disabled:true}],
      giroEmpresa: [{value: '', disabled:true}],
      actividadEmpresas: [{value: '', disabled:true}]
    });

    this.formRecl = this.fb.group({
      tipo: [{value:'', disabled:true}],
      clase: [{value:'', disabled:true}]
    });

    this.formContrato = this.fb.group({
      tipoContrato: [{value:'', disabled:true}],
      diasPrueba: [{value:'',disabled:true}]
    });

    this.formPerfil = this.fb.group({
      vBtra:[{value: '', disabled:true}],
      edadMinima:[{value: '', disabled:true}],
      edadMaxima:[{value: '', disabled:true}],
      genero:[{value: '', disabled:true}],
      estadoCivil:[{value: '', disabled:true}],
    });

    this.formSueldo = this.fb.group({
      diaCorte: [{value:'', disabled:true}],
      tipoNomina: [{value:'', disabled:true}],
      diaPago: [{value:'', disabled:true}],
      periodoPago: [{value:'', disabled:true}],
      especifique: [{value:'', disabled:true}],
    });

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
    this.serviceRequisiciones.createNewRequi(datas)
        .subscribe(data => {
          this.requisicionId = data;
          this.getRequisicion(this.requisicionId);
        })
  }

getRequisicion(id){
    this.serviceRequisiciones.getNewRequi(id)
      .subscribe(data => {
        this.formCliente.patchValue({
          nombrecomercial: data.cliente.nombrecomercial,
          razonSocial: data.cliente.razonSocial,
          rfc: data.cliente.rfc,
          giroEmpresa: data.cliente.giroEmpresas.giroEmpresa,
          actividadEmpresas: data.cliente.actividadEmpresas.actividadEmpresa
        });
        this.formRecl.patchValue({
          tipo: data.tipoReclutamiento.tipoReclutamiento,
          clase: data.claseReclutamiento.clasesReclutamiento
        });
        this.formContrato.patchValue({
          tipoContrato: data.contratoInicial.tipoContrato,
          diasPrueba: data.tiempoContrato.tiempo
        });
        this.formPerfil.patchValue({
          vBtra: data.vBtra,
          edadMinima: data.edadaMinima,
          edadMaxima: data.edadMaxima,
          genero: data.genero.genero,
          estadoCivil: data.estadoCivil.estadoCivil
        });

        this.formSueldo.patchValue({
          diaCorte: data.diaCorte.diaSemana,
          tipoNomina: data.tipoNomina.tipoDeNomina,
          diaPago: data.diaPago.diaSemana,
          periodoPago: data.periodoPago.periodoPago,
          especifique: data.especifique
        });
        this.requisicion = data;
        this.spinner.hide();
      });
  }
}
