import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';


//Servicios
import { CatalogosService } from '../../../../../service/index';

@Component({
  selector: 'app-requisicion-nueva',
  templateUrl: './requisicion-nueva.component.html',
  styleUrls: ['./requisicion-nueva.component.scss'],
  providers:[CatalogosService]
})
export class RequisicionNuevaComponent implements OnInit {
  public damfoId: string;

  constructor(
    private serviceCatalogo: CatalogosService,
    private _Router: Router,
    private _Route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._Route.params.subscribe(params => {
      if(params['id'] != null){
        this.damfoId = params['id'];
      }
    });
  }
}
