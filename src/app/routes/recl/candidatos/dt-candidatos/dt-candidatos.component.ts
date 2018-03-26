import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { DialogcandidatosComponent } from './dialogcandidatos/dialogcandidatos.component';
import { CandidatosService } from '../../../../service/index';

@Component({
  selector: 'app-dt-candidatos',
  templateUrl: './dt-candidatos.component.html',
  styleUrls: ['./dt-candidatos.component.scss'],
  providers: [CandidatosService]
})
export class DtCandidatosComponent implements OnInit {

  candidatodtl: any[];

  displayedColumns = ['Candidato', 'CodigoPostal', 'Curp', 'Rfc', 'Nss', 'accion'];
  public dataSource = new MatTableDataSource(<any>[]);
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private service: CandidatosService, public dialog: MatDialog, private _Router: Router,
      private _Route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getcandidatos()
    .subscribe(data => {
      this.dataSource =  new MatTableDataSource(data);
      console.log(data);
    })
  }

  openDialog(id): void {
    console.log(id);
    this.service.getcandidatodtl(id)
    .subscribe(data => {
      this.candidatodtl = data;
      console.log(this.candidatodtl);
      let dialogRef = this.dialog.open(DialogcandidatosComponent, {
        width: '1200px',
        height: '700px',
        data: this.candidatodtl
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    });
  }
}

  export interface Candidatos {
    Candidato: string;
    CodigoPostal: string;
    Curp: string;
    Rfc: string;
    Nss: string;
  }
