import { Component, OnInit, Inject, ViewChild, Output, Input, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA, PageEvent } from '@angular/material';
import {FormControl,  FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Modelos
import { Apartado } from '../../../../models/recl/candidatos';

// Componentes
import { DialogcandidatosComponent } from './dialogcandidatos/dialogcandidatos.component';
import { BusquedaComponent } from '../busqueda/busqueda.component';

// Servicios
import { CandidatosService } from '../../../../service/index';

@Component({
  selector: 'app-dt-candidatos',
  templateUrl: './dt-candidatos.component.html',
  styleUrls: ['./dt-candidatos.component.scss'],
  providers: [CandidatosService]
})
export class DtCandidatosComponent implements OnInit, AfterViewInit, OnChanges {

  candidatodtl: any[];
  candidatos: any;
  arraycandidatos: any[];
  expandir: boolean;
  Status: any;
  Reclutador: any;
  requisicionId: string;
  vacantes: any[];

  // Objeto para el apartado de candidato.
  public Apartado: FormGroup;

 // Estructura de las tablas a mostrar.
  @Input('Filtrado') FCandidatos: any; //Datos que reciben del filtro.
  displayedColumnsVacantes = ['Vacante', 'FechaCreacion', 'Cliente', 'Reclutamiento', 'Area', 'Accion'];
  public dataSourcev = new MatTableDataSource(<any>[]);
  displayedColumnsp = ['Vacante', 'Estatus'];
  public dataSourcep = new MatTableDataSource(<any>[]);
  displayedColumns = ['Candidato','Experiencias', 'AreaInteres', 'Curp', 'Rfc', 'accion'];
  public dataSource = new MatTableDataSource(<any>[]);

  @ViewChild(MatSort) sort: MatSort;

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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private service: CandidatosService, public dialog: MatDialog, private _Router: Router,
      private _Route: ActivatedRoute) {   }

 ngOnChanges(changes: SimpleChanges){
       if(changes.FCandidatos && !changes.FCandidatos.isFirstChange()) {
        this.ngOnInit();
       }
     }

  ngOnInit() {
    this.dataSource =  new MatTableDataSource(this.FCandidatos);
    this.candidatos = this.FCandidatos;
    this.arraycandidatos = this.candidatos;
    this.pageCount = Math.round(this.candidatos.length / this.rows);
    this.TotalRecords = this.candidatos.length;
    this.paginador();
  }

 // Abrir detalle del candidato
  openDialog(id): void {
    this.service.getcandidatodtl(id)
    .subscribe(data => {
      this.candidatodtl = data;
      this.expandir = true;
    this.service.getEstatusCandidato(this.candidatodtl[0].candidatoId)
      .subscribe(estatus => {
        if (estatus.length == 0){
          this.Status = estatus.length;
          this.Reclutador = 'Candidato disponible';
        }else{
          this.Status = estatus[0].estatus;
          this.Reclutador = estatus[0].reclutador;
          this.requisicionId = estatus[0].requisicionId;
        }
      })
      this.service.getpostulaciones(this.candidatodtl[0].candidatoId)
      .subscribe(postulaciones => {
        this.dataSourcep =  new MatTableDataSource(postulaciones);
      })
      this.service.getvacantes()
      .subscribe(vacantes => {
        this.vacantes = vacantes;
        this.dataSourcev =  new MatTableDataSource(vacantes);
      })
      // let dialogRef = this.dialog.open(DialogcandidatosComponent, {
      //   width: '1200px',
      //   height: '700px',
      //   data: this.candidatodtl
      // });
      // dialogRef.afterClosed().subscribe(result => {
      // });
    });
  }

  OpenDtl(Id): void {
    let dialogRef = this.dialog.open(DialogcandidatosComponent, {
      width: '1200px',
      height: '700px',
      data: this.vacantes
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  Apartar(idvct: any){
    let Apartar: Apartado = new Apartado();
    Apartar.CandidatoId = this.candidatodtl[0].candidatoId;
    Apartar.RequisicionId = idvct;
    Apartar.Reclutador = 'Inntec';
    Apartar.Estatus = 1;
    Apartar.TpContrato = 2;
    // Se manda el objeto con los datos necesarios paa su inserción al servicio.
    this.service.postApartar(Apartar)
    .subscribe(data => {
    })
  }

  // Parametros para paginador.
  length = 0;
  pageSize = 10;
  pageSizeOptions = [10, 20, 30, 50];

  pageEvent: PageEvent;

    rows: number = 10;
    first: number = 0;
    page: number = 1;
    pageCount: number = 0;
    TotalRecords: number = 0;
    paginate(event?: PageEvent)
    {
        if (event.length > event.pageSize){
          this.first = event.pageIndex;
          this.rows = event.pageSize;
          this.page = event.pageIndex;
          this.pageCount = event.length;
        }else{
          this.rows = event.length;
        }
        this.paginador();
    }

    paginador()
    {
        if (this.page < this.pageCount) {
            this.candidatos = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.candidatos[i] = this.arraycandidatos[this.first + i];
            }
        }
        else {
            let lenght = this.arraycandidatos.length - this.first;

            this.candidatos = new Array(lenght);
            for (var i = 0; i < lenght; i++) {
                this.candidatos[i] = this.arraycandidatos[this.first + i];
            }
        }

        this.dataSource =  new MatTableDataSource(this.candidatos);
    }
    // Termina paginador

}

  export interface Candidatos {
    Candidato: string;
    CodigoPostal: string;
    Curp: string;
    Rfc: string;
    Experiencias: string;
    AreaInteres: string;
  }
  export interface postulaciones {
    Vacante: string;
    Estatus: string;
  }

  export interface vacantes {
    Vacante:   string;
    FechaCreacion: string;
    Cliente: string;
    Reclutamiento: string;
    Area: string;
  }
