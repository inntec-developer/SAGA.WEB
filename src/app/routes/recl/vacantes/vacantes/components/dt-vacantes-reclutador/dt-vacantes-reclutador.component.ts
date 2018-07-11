import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { DialogAssingRequiComponent } from './../dialogs/dialog-assing-requi/dialog-assing-requi.component';
import { DialogShowRequiComponent } from './../dialogs/dialog-show-requi/dialog-show-requi.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequisicionesService } from '../../../../../../service';
import { ToasterService } from 'angular2-toaster';
import { element } from 'protractor';

@Component({
  selector: 'app-dt-vacantes-reclutador',
  templateUrl: './dt-vacantes-reclutador.component.html',
  styleUrls: ['./dt-vacantes-reclutador.component.scss'],
  providers: [RequisicionesService]
})
export class DtVacantesReclutadorComponent implements OnInit {
  requi: { folio: any; id: any; };

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
    this.getDataRequisiciones();
  }

  getDataRequisiciones(){
    this.service.getRequiReclutador(localStorage.getItem('id')).subscribe(data => {
      console.log(data);
      this.requisicion = data;
      this.dataSource =  new MatTableDataSource(this.requisicion);
      this.arrayRequisicion = this.requisicion;
      this.spinner.hide();
    });
  }

  // Dialogs
  openDialogShowRequi(id, folio){
      this.requi = {
        folio : folio,
        id : id
      }
      let dialogShow = this.dialog.open(DialogShowRequiComponent, {
        width: '1200px',
        height: '700px',
        data: this.requi
      });    
      
  }

  openDialogAssingRequi(element){
    let dialogAssing = this.dialog.open(DialogAssingRequiComponent, {
      width: '1200px',
      height: 'auto',
      data: element
    });   
    dialogAssing.afterClosed().subscribe(result => {
      this.getDataRequisiciones();
    })
  }

  openDesignVacante($event){
    this._Router.navigate(['/reclutamiento/disenador'], { queryParams: { Requi: $event } });
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
    'prioridad',
    'accion'
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

