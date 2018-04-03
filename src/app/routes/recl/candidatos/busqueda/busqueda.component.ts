import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../service/index';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
  providers: [CandidatosService]
})
export class BusquedaComponent implements OnInit {

  IdPais: number;
  IdEstado: number;
  IdMunicipio: number;
  IdColonia: number;
  IdCp: number;
  Candidatos: any;
  @Output() filtro: EventEmitter<any> = new EventEmitter<any>();

  FiltroPais(event){
    this.IdPais = event;
  }

  FiltroEstado(event){
    this.IdEstado = event;
  }

  FiltroMunicipio(event){
    this.IdMunicipio = event;
  }

  FiltroColonia(event){
    this.IdColonia = event;
  }

  FiltroCp(event){
    this.IdCp = event;
  }

 constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private service: CandidatosService){
   iconRegistry.addSvgIcon(
        'find',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/ic_find_in_page_24px.svg'));
  }

  Filtro(event){
    this.service.getcandidatos()
    .subscribe(data => {
      this.Candidatos = data;
      this.filtro.emit(this.Candidatos);
    })
  }

  ngOnInit(){

  }

}
