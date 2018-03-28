import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA, PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

// Componentes
import { DialogcandidatosComponent } from './dialogcandidatos/dialogcandidatos.component';

// Servicios
import { CandidatosService } from '../../../../service/index';

@Component({
  selector: 'app-dt-candidatos',
  templateUrl: './dt-candidatos.component.html',
  styleUrls: ['./dt-candidatos.component.scss'],
  providers: [CandidatosService]
})
export class DtCandidatosComponent implements OnInit {

  candidatodtl: any[];
  candidatos: any;
  arraycandidatos: any[];

  displayedColumns = ['Candidato', 'CodigoPostal', 'Curp', 'Rfc', 'Nss', 'accion'];
  public dataSource = new MatTableDataSource(<any>[]);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    console.log(this.sort);
    this.dataSource.sort = this.sort;
    console.log(this.dataSource.sort);
  }

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
      this.candidatos = data;
      this.arraycandidatos = data;
      this.pageCount = Math.round(this.candidatos.length / this.rows);
      this.TotalRecords = this.candidatos.length;
      this.paginador();
    })
  }
 // Abrir detalle del candidato
  openDialog(id): void {
    this.service.getcandidatodtl(id)
    .subscribe(data => {
      this.candidatodtl = data;
      let dialogRef = this.dialog.open(DialogcandidatosComponent, {
        width: '1200px',
        height: '700px',
        data: this.candidatodtl
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    });
  }

  // Parametros para paginador.
  length = 0;
  pageSize = 10;
  pageSizeOptions = [10, 30, 50];

  pageEvent: PageEvent;

    rows: number = 10;
    first: number = 0;
    page: number = 1;
    pageCount: number = 0;
    TotalRecords: number = 0;
    paginate(event?: PageEvent)
    {
        console.log(event);

        this.first = event.pageIndex;
        this.rows = event.pageSize;
        this.page = event.pageIndex;
        this.pageCount = event.length;

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
    Nss: string;
  }
