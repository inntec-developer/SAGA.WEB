import { Component, OnInit, Input, AfterContentChecked} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router  } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatTableDataSource, PageEvent, MAT_DIALOG_DATA} from '@angular/material';

//Servicios
import { RequisicionesService, CatalogosService } from '../../../../../service/index';

@Component({
  selector: 'app-view-info-requi',
  templateUrl: './view-info-requi.component.html',
  styleUrls: ['./view-info-requi.component.scss'],
  providers: [RequisicionesService, CatalogosService]
})
export class ViewInforRequiComponent implements OnInit, AfterContentChecked {
  @Input() Folios: string;
  public RequiId :string;
  public checked : boolean = false;
  public Prioridades : any[];
  public Estatus : any[];
  public msj: string;

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
        folio : [{value: '', disabled: true}],
        fch_Solicitud: [{value: '', disabled:true}],
        prioridad: [{value:'', disabled:true}, Validators.required ],
        fch_Cumplimiento: [{value: '', disabled: true}, Validators.required],
        confidencial: [{value:false, disabled:true}],
        estatus: [{value:'', disabled:true}, Validators.required ],
      });
    }

    ngAfterContentChecked(){
      if(this.Folios != null && this.checked == false ){
        this.checked = true;
        this.getInitialData();
      }
    }

    getInitialData(){
      this.serviceRequisicion.getRequiFolio(this.Folios)
        .subscribe(DataRequisicion => {
          this.RequiId = DataRequisicion.id;
          this.formRequi.patchValue({
            folio: DataRequisicion.folio,
            fch_Solicitud: DataRequisicion.fch_Creacion,
            prioridad: DataRequisicion.prioridad.id,
            estatus: DataRequisicion.estatus.id,
            fch_Cumplimiento: DataRequisicion.fch_Cumplimiento,
            confidencial: DataRequisicion.confidencial,

        });
      });
    }

    getPrioridades(){
      this.serviceCatalogos.getPrioridades()
        .subscribe(data => {
          this.Prioridades = data;
        })
    }

    getEsattus(tipoMov: number){
      this.serviceCatalogos.getEstatusRequi(tipoMov)
        .subscribe(data => {
          this.Estatus = data;
        });
    }
  }
