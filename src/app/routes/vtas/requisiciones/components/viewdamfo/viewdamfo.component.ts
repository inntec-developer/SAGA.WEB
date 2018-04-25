import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
//Services
import { RequisicionesService, CatalogosService } from '../../../../../service/index';

//Components

@Component({
  selector: 'app-viewdamfo',
  templateUrl: './viewdamfo.component.html',
  styleUrls: ['./viewdamfo.component.scss'],
  providers: [RequisicionesService]
})
export class ViewdamfoComponent implements OnInit {
  public damfoId: string;
  public damfo290: any[];
  //datos a mostrar
  public cliente: any[];
  public tipoReclutamiento: any[];
  public nombrePerfil : any[];
  public genero : any[];
  public edadMinima : any[];
  public edadMaxima : any[];
  public estadiCivil : any[];
  public escolaridadesPerfil : any[];
  public observacionesPerfil : any[];
  public procesoPerfil : any[];
  public diaCorte : any[];
  public tipoNomina : any[];
  public diaPago : any[];
  public sueldoMinimo : any[];
  public sueldoMAximo : any[];
  public documentosCliente : any[];
  public prestacionesCliente : any[];
  public psicometriasDamsa : any[];
  public psicometriascliente : any[];
  public competenciasCardinalPerfil : any[];
  public competenciasAreaPerfil : any[];
  public competetenciasGerencialPerfil : any[];



  constructor(
    private serviceRequisiciones: RequisicionesService,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private spinner:  NgxSpinnerService
  ) {


  }
  ngOnInit() {
    this.spinner.show();
    this._Route.params.subscribe(params => {
      if(params['IdDamfo'] != null){
        this.damfoId = params['IdDamfo'];
        this.serviceRequisiciones.getDamfoById(this.damfoId)
            .subscribe(data => {
              this.damfo290 = data;
              this.spinner.hide();
            });
      }else{
          this.spinner.hide();
          console.log('Error al ccargar información');
      }
    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>DAM-FO-290</title>
          <style>
            /* Structure */
            .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
                position: relative;
                min-height: 1px;
                padding-left: 15px;
                padding-right: 15px;
            }
            .dt-container {
              display: flex;
              flex-direction: column;
              min-width: 100%;
            }

            .dt-header {
              min-height: 64px;
              padding: 8px 24px 0;
            }

            .mat-form-field {
              font-size: 12px;
              width: 100%;
            }

            .mat-table {
              font-size: 12px;
              overflow: auto;
              max-height:100%;
              display: block;
            }
            .mat-header-cell {
                font-weight: bold;
                color: whitesmoke;
            }

            .mat-cell{
              font-size: 10px;
            }

            .mat-header-row {
                min-height: auto;
                background-color: dodgerblue;
                border-collapse: separate;
                table-layout: auto;
                display: flex;
                border-bottom-width: 1px;
                border-bottom-style: solid;
                -webkit-box-align: center;
                padding: 0px 7px;
                box-sizing: border-box;
                border-bottom-color: rgba(0,0,0,.12);
            }

            .mat-cell, .mat-header-cell {
                flex: 1;
                overflow: hidden;
                word-wrap: break-word;
                font-weight: bold;
            }

            .mat-header-cell{

              font-weight: bold;
              color: whitesmoke;
            }

            .mat-header-row, .mat-row {
              border-collapse: separate;
              table-layout: auto;
              display: flex;
              border-bottom-width: 1px;
              border-bottom-style: solid;
              align-items: center;
              padding: 0px 7px;
              box-sizing: border-box;
            }

            .mat-row {
                min-height: 25px;
            }

            .mat-cell-right{
              text-align: right;
              margin-right: 35px;
            }

            .mat-cell-center{
              text-align: center;
            }

            .example-headers-align .mat-expansion-panel-header-title,
            .example-headers-align .mat-expansion-panel-header-description {
              flex-basis: 0;
            }

            .example-headers-align .mat-expansion-panel-header-description {
              justify-content: space-between;
              align-items: center;
            }

            small{
              font-size: 11px;
            }

            .mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
                background: inherit;
            }
            .mat-expansion-panel-header {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0 24px;
                font-size: 15px;
                font-weight: 400;
            }

            .mat-expansion-panel {
                background: #fff;
                color: rgba(0,0,0,.87);
            }

            .relative2 {

              position: relative;
              top: -20px;
              left: 20px;
              background-color: white;
              width: 500px;
            }
            .relative3 {

              position: relative;
              top: -20px;
              left: 20px;
              background-color: white;
              width: 500px;
            }

          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
