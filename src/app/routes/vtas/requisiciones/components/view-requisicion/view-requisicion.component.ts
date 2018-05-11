import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router  } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatTableDataSource, PageEvent, MAT_DIALOG_DATA} from '@angular/material';

//Services
import { RequisicionesService, CatalogosService } from '../../../../../service/index';

@Component({
  selector: 'app-view-requisicion',
  templateUrl: './view-requisicion.component.html',
  styleUrls: ['./view-requisicion.component.scss'],
  providers: [RequisicionesService]
})
export class ViewRequisicionComponent implements OnInit {
  public requiId : string;
  public requisicion: any[];
  constructor(
    private serviceRequisiciones: RequisicionesService,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._Route.params.subscribe( params => {
      if(params['IdRequi'] != null){
        this.requiId = params['IdRequi']
        this.serviceRequisiciones.getNewRequi(this.requiId)
          .subscribe(data => {
                this.requisicion = data;
                this.spinner.hide();
          });
      }else {
        this.spinner.hide();
        console.log("Error al cargar la información.");
      }
    });
  }
}
