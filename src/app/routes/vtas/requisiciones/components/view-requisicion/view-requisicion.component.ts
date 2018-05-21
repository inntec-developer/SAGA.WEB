import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { ViewInforRequiComponent } from '../view-info-requi/view-info-requi.component';
import { ViewCuerpoRequiComponent } from '../view-cuerpo-requi/view-cuerpo-requi.component';

@Component({
  selector: 'app-view-requisicion',
  templateUrl: './view-requisicion.component.html',
  styleUrls: ['./view-requisicion.component.scss']
})
export class ViewRequisicionComponent implements OnInit {

  public requiId : string;
  public folio: number;

  constructor(
    private _Router: Router,
    private _Route: ActivatedRoute,
  ) {
    this._Route.params.subscribe( params => {
      if(params['IdRequi'] != null){
        this.requiId = params['IdRequi'];
        this.folio = params['Folio'];
      }else {
        console.log("Error al cargar la información.");
      }
    });
  }
  ngOnInit(){}

  editRequi(){
    this._Router.navigate(['/ventas/edicionRequisicion', this.requiId, this.folio], {skipLocationChange:true});
  }
}
