import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import {MatTableDataSource, PageEvent, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dt-direccion',
  templateUrl: './dt-direccion.component.html',
  styleUrls: ['./dt-direccion.component.scss']
})
export class DtDireccionComponent implements OnInit,  AfterViewInit {
  @Input() Direcciones : any[];
  getAddress : boolean = false;
  public dataSource: MatTableDataSource<any[]>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
  }
  ngAfterContentChecked(){
    if(this.Direcciones != null){
      this.cargarDirecciones(this.Direcciones);
    }else{
      console.log('Concha tu madre no hay datos en direcciones');
    }
  }

  cargarDirecciones(data){
    if(!this.getAddress){
        this.dataSource = new MatTableDataSource(data);
        this.getAddress = true;
    }
  }

  //*******************************-- GRID-- *********************************************//
    // Display para mostrar los objetos en el Grid
    displayedColumns = [
      'tipoDireccion',
      'pais',
      'estado',
      'municipio',
      'colonia',
      'calle',
      'numeroExterior',
      'numeroInterior',
      'codigoPostal',
      'activo',
      'esPrincipal'
    ];

  }

  export interface Element {
    tipoDireccion: string;
    pais: string;
    estado: string;
    municipio: string;
    colonia: string;
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    codigoPostal: string;
    activo: boolean;
    esPrincipal: boolean;
  }
