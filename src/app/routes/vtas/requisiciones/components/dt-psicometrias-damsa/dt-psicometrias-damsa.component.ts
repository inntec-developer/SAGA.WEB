import { Component, OnInit, Input, OnChanges, AfterContentChecked } from '@angular/core';
import { MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-dt-psicometrias-damsa',
  templateUrl: './dt-psicometrias-damsa.component.html',
  styleUrls: ['./dt-psicometrias-damsa.component.scss']
})
export class DtPsicometriasDamsaComponent implements OnInit, AfterContentChecked {

  @Input()  Psicometrias: any[];
  public dataSource : MatTableDataSource<any[]>;
  getPsicometria : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    if(this.Psicometrias != null){
      this.cargarPsicometrias(this.Psicometrias)
    }
  }

  cargarPsicometrias(data){
    if(!this.getPsicometria){
      this.dataSource = new MatTableDataSource(data);
      this.getPsicometria = true;
    }
  }

  //*******************************-- GRID-- *********************************************//
  // Display para mostrar los objetos en el Grid
  displayedColumns = [
  'psicometrias',
  'descripcion'
  ]
}

export interface Element {
  psicometria: string;
}
