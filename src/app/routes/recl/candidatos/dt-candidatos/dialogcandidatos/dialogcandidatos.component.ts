import { Component, OnInit, Inject } from '@angular/core';
import {FormControl,  FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

// Modelos
import { Apartado } from '../../../../../models/recl/candidatos';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-dialogcandidatos',
  templateUrl: './dialogcandidatos.component.html',
  styleUrls: ['./dialogcandidatos.component.scss'],
  providers: [CandidatosService]
})
export class DialogcandidatosComponent implements OnInit {

  vacantesdtl: any[];

  displayedColumnsVacantes = ['Vacante', 'Accion']
  displayedColumns = ['Vacante', 'Estatus'];
  public dataSourcev = new MatTableDataSource(<any>[]);
  public dataSource = new MatTableDataSource(<any>[]);

  // Objeto para el apartado de candidato.
  public Apartado: FormGroup;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourcev.filter = filterValue;
  }

  constructor(public dialogRef: MatDialogRef<DialogcandidatosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: CandidatosService) {
      this.service.getvacantesdtl(data)
      .subscribe(vacantesdtl => {
        this.vacantesdtl = vacantesdtl;
        console.log(this.vacantesdtl);
      });
    }

    ngOnInit() {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}