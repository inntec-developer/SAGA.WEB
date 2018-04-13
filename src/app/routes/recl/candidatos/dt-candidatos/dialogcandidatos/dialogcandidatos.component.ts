import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-dialogcandidatos',
  templateUrl: './dialogcandidatos.component.html',
  styleUrls: ['./dialogcandidatos.component.scss'],
  providers: [CandidatosService]
})
export class DialogcandidatosComponent implements OnInit {

  candidatodtl: any[];
  Edad: number;
  Genero: string;
  idcandidato: any;

  displayedColumnsVacantes = ['Vacante', 'Accion']
  displayedColumns = ['Vacante', 'Estatus'];
  public dataSourcev = new MatTableDataSource(<any>[]);
  public dataSource = new MatTableDataSource(<any>[]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(public dialogRef: MatDialogRef<DialogcandidatosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: CandidatosService) {
      this.service.getpostulaciones(data[0].candidatoId)
      .subscribe(postulaciones => {
        this.dataSource =  new MatTableDataSource(postulaciones);
      })
      this.service.getvacantes()
      .subscribe(vacantes => {
        this.dataSourcev =  new MatTableDataSource(vacantes);
      })
    }

  onNoClick(): void {
    this.dialogRef.close();
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

  ngOnInit() {

  }

}

  export interface postulaciones {
    Vacante: string;
    Estatus: string;
  }

  export interface vacantes {
    Vacante:   string;
  }
