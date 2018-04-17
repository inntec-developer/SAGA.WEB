import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dt-horarios',
  templateUrl: './dt-horarios.component.html',
  styleUrls: ['./dt-horarios.component.scss']
})
export class DtHorariosComponent implements OnInit, AfterContentChecked {
  @Input() Horarios: any[];
  public dataSource : MatTableDataSource<any[]>;
  getHorarios: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    if(this.Horarios != null){
      this.cargarHorarios(this.Horarios);
    }
  }

  cargarHorarios(data){
    if(!this.getHorarios){
      this.dataSource = new MatTableDataSource(data);
      this.getHorarios =  true;
    }
  }

  //*******************************-- GRID-- *********************************************//
  // Display para mostrar los objetos en el Grid
  displayedColumns = [
    'nombre',
    'deDia',
    'aDia',
    'deHora',
    'aHora',
    'vacantes',
    'especificaciones',
    'activo'
  ]
}

export interface Element{
  nombre: string;
  deDia: string;
  aDia: string;
  deHora: string;
  aHHora: string;
  vacantes: number;
  especificaciones: string;
  activo: boolean;
}
