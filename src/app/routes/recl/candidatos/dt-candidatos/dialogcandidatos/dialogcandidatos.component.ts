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

  candidatodtl: any[];
  Edad: number;
  Genero: string;
  idcandidato: any;
  Status: any;
  Reclutador: any;
  requisicionId: string;

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
      this.service.getpostulaciones(data[0].candidatoId)
      .subscribe(postulaciones => {
        this.dataSource =  new MatTableDataSource(postulaciones);
      })
      this.service.getvacantes()
      .subscribe(vacantes => {
        this.dataSourcev =  new MatTableDataSource(vacantes);
        console.log(vacantes);
      })
      this.service.getEstatusCandidato(data[0].candidatoId)
      .subscribe(estatus => {
        if (estatus.length == 0){
          this.Status = estatus.length;
          this.Reclutador = 'Candidato disponible';
        }else{
          this.Status = estatus[0].estatus;
          this.Reclutador = estatus[0].reclutador;
          this.requisicionId = estatus[0].requisicionId;
        }
        console.log(this.requisicionId);
      })
    }

    ngOnInit() {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

 Apartar(idvct: any){
   let Apartar: Apartado = new Apartado();
   Apartar.CandidatoId = this.data[0].candidatoId;
   Apartar.RequisicionId = idvct;
   Apartar.Reclutador = 'Inntec';
   Apartar.Estatus = 1;
   Apartar.TpContrato = 2;
   // Se manda el objeto con los datos necesarios paa su inserción al servicio.
   this.service.postApartar(Apartar)
   .subscribe(data => {
     console.log(data);
   })
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

}

  export interface postulaciones {
    Vacante: string;
    Estatus: string;
  }

  export interface vacantes {
    Vacante:   string;
  }
