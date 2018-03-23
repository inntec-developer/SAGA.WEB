import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//Servicios
import { RequisicionesService } from '../../../../../service/index';
//Element  Angular Material
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dt-damfo',
  templateUrl: './dt-damfo.component.html',
  styleUrls: ['./dt-damfo.component.scss'],
  providers: [RequisicionesService]
})
export class DtDamfoComponent implements OnInit {

  constructor(
    private service: RequisicionesService,
    private _Router: Router,
    private _Route: ActivatedRoute
  ) { }

  //Varaibales Globales
  public dataSource: MatTableDataSource<any[]>;
  ngOnInit() {
    this.service.getDamgo290().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
  }
  // Display para mostrar los objetos en el Grid
  displayedColumns = [
    'cliente',
    'nombrePerfil',
    'giroEmpresa',
    'actividadEmpresa',
    'tipoReclutamiento',
    'claseReclutamiento',
    'sueldoMinimo',
    'sueldoMaximo',
    'fch_Creacion',
    'accion'
  ];
  // Filtro dentro del Grid
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createRequi(id){
    this._Router.navigate(['/ventas/requisicionNueva', id], {skipLocationChange:true});
  }
  showDamfo(event){
    console.log(event);
  }
}

export interface Element {
  id: string;
  cliente: string;
  nombrePerfil: string;
  giroEmpresa: string;
  actividadEmpresa: string;
  tipoReclutamiento: string;
  claseReclutamiento: string;
  sueldoMinimo: string;
  sueldoMaximo: string;
  fch_Creacion: string;
}
