import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormControl,  FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Modelos
import { Filtros } from '../../../../models/recl/candidatos';

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
  // Decorador para envio de busqueda a tabla de candidatos.
  @Output() filtro: EventEmitter<any> = new EventEmitter<any>();
  // Objeto de filtros de busqueda.
  public Filtros: FormGroup;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private service: CandidatosService){
    iconRegistry.addSvgIcon(
         'find',
         sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/ic_find_in_page_24px.svg'));
   }

   ngOnInit(){  }

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

  // Busqueda de candidatos segun filtros de busqueda.
  Buscar(){
  let filtroX: Filtros = new Filtros();

    filtroX.IdPais = this.IdPais;
    filtroX.IdEstado = this.IdEstado;
    filtroX.IdMunicipio = this.IdMunicipio;
    filtroX.Cp = this.IdCp;
    // filtroX.palabraClave = this.FiltroVacantes.get('palabraClave').value;
    this.service.getcandidatos(filtroX)
    .subscribe(data => {
      this.Candidatos = data;
      this.filtro.emit(this.Candidatos); // Envio de filtro a tabla de candidatos.
    })
  }

}
