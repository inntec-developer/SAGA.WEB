import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { NgxSpinnerService } from 'ngx-spinner';
import { RequisicionesService } from '../../../../../../service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-dt-vacantes-reclutador',
  templateUrl: './dt-vacantes-reclutador.component.html',
  styleUrls: ['./dt-vacantes-reclutador.component.scss'],
  providers: [RequisicionesService]
})
export class DtVacantesReclutadorComponent implements OnInit {

  constructor(
    private service: RequisicionesService,
    private dialog: MatDialog,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toasterService: ToasterService
  ) { }
  // Variables Globales
  requisicion: any;
  arrayRequisicion: any[];
  public dataSource = new MatTableDataSource(<any>[]);

  ngOnInit() {
    this.getDateRequisiciones();
  }

  getDateRequisiciones(){
    debugger
    this.service.getRequiReclutador(localStorage.getItem('id')).subscribe(data => {
      this.requisicion = data;
      this.dataSource =  new MatTableDataSource(this.requisicion);
      this.arrayRequisicion = this.requisicion;
      this.spinner.hide();
    });
  }

   // Display para mostrar los objetos en el Grid
   private _displayedColumns = [
    'folio',
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
    'prioridad'
  ];
  public get displayedColumns() {
    return this._displayedColumns;
  }
  public set displayedColumns(value) {
    this._displayedColumns = value;
  }
  // Filtro dentro del Grid
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  folio: string;
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
