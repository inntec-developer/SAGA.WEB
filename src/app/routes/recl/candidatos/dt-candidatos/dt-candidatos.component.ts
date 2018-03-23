import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DialogcandidatosComponent } from './dialogcandidatos/dialogcandidatos.component';
import { CandidatosService } from '../../../../service/index';

@Component({
  selector: 'app-dt-candidatos',
  templateUrl: './dt-candidatos.component.html',
  styleUrls: ['./dt-candidatos.component.scss'],
  providers: [CandidatosService]
})
export class DtCandidatosComponent implements OnInit {

  displayedColumns = ['Candidato', 'CodigoPostal', 'Curp', 'Rfc', 'Nss', 'accion'];
  public dataSource = new MatTableDataSource(<any>[]);
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private service: CandidatosService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getcandidatos()
    .subscribe(data => {
      this.dataSource =  new MatTableDataSource(data);
      console.log(data);
    })
  }

  openDialog(): void {
      let dialogRef = this.dialog.open(DialogcandidatosComponent, {
        width: '1200px',
        height: '700px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
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
