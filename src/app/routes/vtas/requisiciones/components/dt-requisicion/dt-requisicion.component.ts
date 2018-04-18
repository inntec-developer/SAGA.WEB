import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource, PageEvent, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster/angular2-toaster';
//Servicios
import { RequisicionesService } from '../../../../../service/index';

@Component({
  selector: 'app-dt-requisicion',
  templateUrl: './dt-requisicion.component.html',
  styleUrls: ['./dt-requisicion.component.scss'],
  providers: [RequisicionesService]
})
export class DtRequisicionComponent implements OnInit {

  constructor(
    private service: RequisicionesService,
    private dialog: MatDialog,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toasterService: ToasterService

  ) { }
  //VARIABLES GLOBALES
  requisicion: any[];
  arrayRequisicion: any[];
  public dataSource: MatTableDataSource<any[]>;

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    this.service.getRequisiciones().subscribe(data => {
      this.dataSource =  new MatTableDataSource(data);
      this.requisicion = data;
      this.arrayRequisicion = data;
      this.pageCount = Math.round(this.requisicion.length / this.rows);
      this.TotalRecords = this.requisicion.length;
      this.paginador();
      this.spinner.hide();
      console.log(this.requisicion);
    });
  }

  //*******************************-- GRID-- *********************************************//
  // Paginador.
  length = 0;
  pageSize = 10;
  pageSizeOptions = [10, 30, 50]

  rows: number = 10;
  first: number = 0;
  page: number = 1;
  pageCount: number = 0;
  TotalRecords: number = 0;
  paginate(event?: PageEvent){
      if(event.length > event.pageSize )
      {
        this.first = event.pageIndex;
        this.rows = event.pageSize;
        this.page = event.pageIndex;
        this.pageCount = event.length;
      }
      else{
        this.rows = event.length;
      }
      this.paginador();
  }

  paginador(){
    if(this.page < this.pageCount){
      this.requisicion = new Array(this.rows);
      for(var i = 0; i < this.rows; i++){
        this.requisicion[i] = this.arrayRequisicion[this.first + i];
      }
    }
    else{
      let length = this.arrayRequisicion.length - this.first;
      this.requisicion = new Array(length);
      for (var i = 0; i < length; i++) {
          this.requisicion[i] = this.arrayRequisicion[this.first + i];
      }
    }
    this.dataSource = new MatTableDataSource(this.requisicion);
  }
  //Termino de Paginador

  //Display para mostrar los objetos en el Grid
  displayedColumns = [
    'cliente',
    'rfc',
    'vBtra',
    'empresa',
    'reclutamiento',
    'sueldoMinimo',
    'sueldoMaximo',
    'fch_Creacion',
    'fch_Cumplimiento',
    'estatus',
    'prioridad',
    'accion'
  ];
  // Filtro dentro del Grid
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  id: string;
  cliente: string;
  rfc: string;
  vBtra: string;
  tipoReclutamiento: string;
  claseReclutamiento: string;
  sueldoMinimo: string;
  sueldoMaximo: string;
  fch_Creacion: string;
  fch_Cumplimiento: string;
  estatus: number;
  prioridad: number;
}
