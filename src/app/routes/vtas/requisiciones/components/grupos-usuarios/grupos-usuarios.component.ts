import { Component, OnInit, Input, AfterContentChecked} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router  } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatTableDataSource, PageEvent, MAT_DIALOG_DATA} from '@angular/material';

//Servicios
import { RequisicionesService, CatalogosService } from '../../../../../service/index';

@Component({
  selector: 'app-grupos-usuarios',
  templateUrl: './grupos-usuarios.component.html',
  styleUrls: ['./grupos-usuarios.component.scss'],
  providers: [RequisicionesService, CatalogosService]
})
export class GruposUsuariosComponent implements OnInit, AfterContentChecked {
@Input() Folios: string;
public checked : boolean = false;
public Prioridades : any[];
public Estatus : any[];

public formRequi : FormGroup;


  constructor(
    public fb: FormBuilder,
    public serviceRequisicion: RequisicionesService,
    public serviceCatalogos: CatalogosService
  ) {
      this.formRequi = new FormGroup({
        folio: new FormControl(),
        fch_Solicitud: new FormControl(),
        prioridad: new FormControl(),
        fch_Cumplimiento: new FormControl(),
        confidencial: new FormControl(),
        estatus:  new FormControl(),
      });
   }

  ngOnInit() {
    this.getPrioridades();
    this.getEsattus(2);
    this.formRequi = this.fb.group({
      folio : [{value: this.Folios, disabled: true}],
      fch_Solicitud: [{value: '', disabled:true}],
      prioridad: [{value: ''}, Validators.required ],
      fch_Cumplimiento: [{value: ''}, Validators.required],
      confidencial: [false],
      estatus: [{value: ''}, Validators.required]
    });
  }

  ngAfterContentChecked(){
    if(this.Folios != null && this.checked == false ){
      console.log(this.Folios);
      this.checked = true;
      this.getInitialData();
    }
  }

  getInitialData(){
    this.serviceRequisicion.getRequiFolio(this.Folios)
      .subscribe(DataRequisicion => {
        this.formRequi.patchValue({
          folio: this.Folios,
          fch_Solicitud: DataRequisicion.fch_Creacion,
          prioridad: DataRequisicion.prioridad.id,
          fch_Cumplimiento: DataRequisicion.fch_Cumplimiento,
          confidencial: DataRequisicion.confidencial,
          estatus: DataRequisicion.estatus
      })


    });
    console.log(this.formRequi);
  }



  getPrioridades(){
    this.serviceCatalogos.getPrioridades()
      .subscribe(data => {
        this.Prioridades = data;
        console.log(this.Prioridades);
      })
  }

  getEsattus(tipoMov: number){
    this.serviceCatalogos.getEstatusRequi(tipoMov)
      .subscribe(data => {
        this.Estatus = data;
        console.log(this.Estatus);
      });
  }

}
