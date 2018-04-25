import { Component, OnInit, Inject, ViewChild, Output, Input, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA, PageEvent } from '@angular/material';
import {FormControl,  FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {ToasterService,ToasterConfig} from 'angular2-toaster';
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

  // Variables utilizadas. ***
  @Input('Filtrado') FCandidatos: any; //Datos que reciben del filtro. ***
  candidatodtl: any[];
  candidatos: any;
  arraycandidatos: any[];
  arrayvacantes: any[];
  expandir: boolean;
  Status: any;
  Reclutador: any;
  requisicionId: string;
  StatusId: any;
  tpcontrato: any;
  vacantes: any[];
  NumVacantes: number;
  NumPostulaciones: number;
  private toasterService: ToasterService;
  toaster: any;
  toasterConfig: any;
  toasterconfig: ToasterConfig = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      showCloseButton: true
  });

  // Objeto para el apartado de candidato. ***
  public Apartado: FormGroup;

  // Estructura de las tablas a mostrar. ***
  // Columnas de tabla de Vacantes. ***
  displayedColumnsVacantes = ['Vacante', 'FechaCreacion', 'Cliente', 'Reclutamiento', 'Area', 'Accion'];
  public dataSourcev = new MatTableDataSource(<any>[]);
  // Columnas de tabla de Postulaciones. ***
  displayedColumnsp = ['Vacante', 'Estatus'];
  public dataSourcep = new MatTableDataSource(<any>[]);
  // Columnas de tabla de candidatos. ***
  displayedColumns = ['Candidato','Experiencias', 'AreaInteres', 'Curp', 'Rfc', 'accion'];
  public dataSource = new MatTableDataSource(<any>[]);

  @ViewChild(MatSort) sort: MatSort;

  // Variable para el consecutivo del detalle del candidato. ***
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  SiguienteStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
 }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

 // Filtro de tabla de candidatos. ***
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
 // Filtro de tabla de vacantes. ***
  applyFilterv(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSourcev.filter = filterValue;
  }

  constructor(private service: CandidatosService, public dialog: MatDialog, private _Router: Router,
      private _Route: ActivatedRoute, toasterService: ToasterService) { this.toasterService = toasterService;  }

 // Captamos la variable de la busqueda de candidatos para ver si tiene cambios. ***
 ngOnChanges(changes: SimpleChanges){
       if(changes.FCandidatos && !changes.FCandidatos.isFirstChange()) {
        this.ngOnInit();
       }
 }

 // Agregamos la carga para la tabla de candidatos. ***
  ngOnInit() {
    this.dataSource =  new MatTableDataSource(this.FCandidatos);
    this.candidatos = this.FCandidatos;
    this.arraycandidatos = this.candidatos;
    this.pageCount = Math.round(this.candidatos.length / this.rows);
    this.TotalRecords = this.candidatos.length;
    this.paginador();
  }

  // Boton de ver de la tabla de candidatos. ***
  openDialog(id): void {
   // Buscamos el detalle del candidato seleccionado. ***
    this.service.getcandidatodtl(id)
    .subscribe(data => {
      this.candidatodtl = data;

      // Buscamos el estatus del candidato del apartado o liberado. ***
      this.service.getEstatusCandidato(this.candidatodtl[0].candidatoId)
          .subscribe(estatus => {
            if (estatus.length == 0){
              this.Status = estatus.length;
              this.Reclutador = 'Candidato disponible';
            }else{
              this.Status = estatus[0].estatus;
              this.Reclutador = estatus[0].reclutador;
              this.requisicionId = estatus[0].requisicionId;
              this.StatusId = estatus[0].id;
              this.tpcontrato = estatus[0].tpContrato
            }
        });
        // Buscamos las postulaciones del candidato. ***
        this.service.getpostulaciones(this.candidatodtl[0].candidatoId)
            .subscribe(postulaciones => {
              this.dataSourcep =  new MatTableDataSource(postulaciones);
              this.NumPostulaciones = postulaciones.length;
        });
        // Buscamos las vacantes de la celula o los asignados al reclutador. ***
        this.service.getvacantes()
            .subscribe(vacantes => {
              this.vacantes = vacantes;
              this.arrayvacantes = this.vacantes;
              this.pageCountv = Math.round(this.vacantes.length / this.rowsv);
              this.TotalRecordsv = this.vacantes.length;
              this.dataSourcev =  new MatTableDataSource(vacantes);
              this.NumVacantes = this.vacantes.length;
              this.paginadorv();
        });
    });
      this.expandir = true; // Expandemos los detalles del candidato seleccionado. ***

      // let dialogRef = this.dialog.open(DialogcandidatosComponent, {
      //   width: '1200px',
      //   height: '700px',
      //   data: this.candidatodtl
      // });
      // dialogRef.afterClosed().subscribe(result => {
      // });
  }

 // Abrimos el modal en donde mandamos el id de la requisicion para mostar los datos. ***
  OpenDtl(Id): void {
    let dialogRef = this.dialog.open(DialogcandidatosComponent, {
      width: '1200px',
      height: '700px',
      data: this.vacantes
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

 // Proceso de apartado del candidato. ***
  Apartar(idvct: any){
    let Apartar: Apartado = new Apartado();
    Apartar.CandidatoId = this.candidatodtl[0].candidatoId;
    Apartar.RequisicionId = idvct;
    Apartar.Reclutador = 'Inntec';
    Apartar.Estatus = 1;
    Apartar.TpContrato = 2;
    // Se manda el objeto con los datos necesarios para su inserción al servicio. ***
    this.service.postApartar(Apartar)
    .subscribe(data => {
      this.pop(data.mensaje,true,data.estatus,'Apartado',data.reclutador);
    })
    // Recargamos de nuevo la vacante con el apartado. ***
    this.openDialog(this.candidatodtl[0].candidatoId)
  }

  // Proceso de liberación del candidato. ***
  Liberar(idvct: any){
    this.service.Liberar(this.StatusId)
    .subscribe(data => {
      this.pop('Hola',false,0,'Liberado',data);
    })
    // Recargamos de nuevo la vacante con el borrado. ***
    this.openDialog(this.candidatodtl[0].candidatoId)
  }

  // Mensajes de confirmación o error. ***
  pop(mensaje:string,bandera:boolean,estatus:number,titulo:string,candidato:string) {
    if (bandera == true){ // mandamos la validación del apartado ***
      if (estatus > 0){
        var type = 'success';
        mensaje='Candidato apartado por: '+candidato;
      }else{
        var type = 'error';
        mensaje='El candidato no se pudo apartar correctamente.';
      }
    }else{ // mandamos la validación del liberado. ***
      if (estatus ==0){
      var type = 'error';
      mensaje='Candidato liberado';
    }else{
      var type = 'warning';
      mensaje='El candidato no se pudo liberar correctamente.';
    }
    }
      this.toasterService.pop(type, titulo, mensaje);
  }

  // Parametros para paginador candidatos. ***
  length = 0;
  pageSize = 10;
  pageSizeOptions = [10, 20, 30, 50];

  pageEvent: PageEvent;

  rows: number = 10;
  first: number = 0;
  page: number = 1;
  pageCount: number = 0;
  TotalRecords: number = 0;

  // Función de paginador para afectación de los numeros de registros y página.
  paginate(event?: PageEvent) {
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

    // Comienza el paginador. ***
    paginador(){
      if (this.page < this.pageCount) {
        this.candidatos = new Array(this.rows);
        for (var i = 0; i < this.rows; i++) {
          this.candidatos[i] = this.arraycandidatos[this.first + i];
        }
      }else {
        let lenght = this.arraycandidatos.length - this.first;
        this.candidatos = new Array(lenght);
        for (var i = 0; i < lenght; i++) {
          this.candidatos[i] = this.arraycandidatos[this.first + i];
        }
      }
        this.dataSource =  new MatTableDataSource(this.candidatos);
    }
    // Termina paginador

    // Parametros para paginador vacantes. ***
    lengthv = 0;
    pageSizev = 5;
    pageSizeOptionsv = [5, 10, 15, 20];

    pageEventv: PageEvent;

    rowsv: number = 5;
    firstv: number = 0;
    pagev: number = 1;
    pageCountv: number = 0;
    TotalRecordsv: number = 0;

    // Función de paginador para afectación de los numeros de registros y página.
    paginatev(eventv?: PageEvent) {
    debugger;
     if (eventv.length > eventv.pageSize){
        this.firstv = eventv.pageIndex;
        this.rowsv = eventv.pageSize;
        this.pagev = eventv.pageIndex;
        this.pageCountv = eventv.length;
      }else{
        this.rowsv = eventv.length;
      }
        this.paginadorv();
      }

      // Comienza el paginador. ***
      paginadorv(){
        if (this.pagev < this.pageCountv) {
          this.vacantes = new Array(this.rowsv);
          for (var i = 0; i < this.rowsv; i++) {
            this.vacantes[i] = this.arrayvacantes[this.firstv + i];
          }
        }else {
          let lenghtv = this.arrayvacantes.length - this.firstv;
          this.vacantes = new Array(lenghtv);
          for (var i = 0; i < lenghtv; i++) {
            this.vacantes[i] = this.arrayvacantes[this.firstv + i];
          }
        }
          this.dataSourcev =  new MatTableDataSource(this.vacantes);
      }
      // Termina paginador

}
  // Interface de la tabla de candidatos. ***
  export interface Candidatos {
    Candidato: string;
    CodigoPostal: string;
    Curp: string;
    Rfc: string;
    Experiencias: string;
    AreaInteres: string;
  }
  // Interface de la tabla de postulaciones. ***
  export interface postulaciones {
    Vacante: string;
    Estatus: string;
  }
 // Interface de la tabla de vacantes. ***
  export interface vacantes {
    Vacante:   string;
    FechaCreacion: string;
    Cliente: string;
    Reclutamiento: string;
    Area: string;
  }
