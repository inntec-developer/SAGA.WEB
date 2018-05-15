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

public formRequi : FormGroup;


  constructor(
    public fb: FormBuilder,
    public serviceRequisicion: RequisicionesService,
    public serviceCatalogos: CatalogosService
  ) {
    this.formRequi = new FormGroup({
           prioridad: new FormControl(),
           fch_Cumplimiento: new FormControl(),
           folio: new FormControl()
        });
   }

  ngOnInit() {
    this.formRequi = this.fb.group({
      prioridad: [{value: ''}, Validators.required],
      fch_Cumplimiento: [{value: ''}, Validators.required],
      folio : [{value: this.Folios, disabled: true}]
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
    this.getPrioridades();
    this.formRequi.patchValue({
      folio: this.Folios
    });
  }

  getPrioridades(){
      this.serviceCatalogos.getPrioridades()
        .subscribe(data => {
          this.Prioridades = data;
          console.log(this.Prioridades);
        })
  }

}
