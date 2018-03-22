import { Component, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  IdPais: number;
  IdEstado: number;
  IdMunicipio: number;

  FiltroPais(event){
    this.IdPais = event;
  }

  FiltroEstado(event){
    this.IdEstado = event;
  }

  FiltroMunicipio(event){
    this.IdMunicipio = event;
  }

 constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
   iconRegistry.addSvgIcon(
        'find',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/ic_find_in_page_24px.svg'));
  }

  ngOnInit(){

  }

}
