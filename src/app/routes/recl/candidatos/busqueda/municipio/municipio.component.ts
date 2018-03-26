import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss'],
  providers: [CandidatosService]
})
export class MunicipioComponent implements OnInit {
 // Variables
  @Input('Estado') filtroestado: any;
  Municipios: any[];
  MunicipioCtrl: FormControl;
  filteredMunicipio: Observable<any[]>;
  // Sacamos el filtro para verlo en busqueda.
  filtromunicipio: any;
  @Input() IdMunicipio: any = 0;
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: CandidatosService) {
    this.MunicipioCtrl = new FormControl();
  }

  filterMunicipio(municipio: string) {
    return this.filtromunicipio = this.Municipios.filter(muni =>
        muni.municipio.toLowerCase().indexOf(municipio.toLowerCase()) === 0);
  }

  SendIdMunicipio(){
      this.service.getmunicipios(this.filtroestado)
      .subscribe(data => {
        this.Municipios = data.municipios;
        this.filteredMunicipio = this.MunicipioCtrl.valueChanges
          .pipe(startWith(''),
            map(municipio => municipio ? this.filterMunicipio(municipio) : this.Municipios.slice())
          );
      })
    
      this.IdMunicipio = this.filtromunicipio[0].id;
      this.change.emit(this.IdMunicipio);
  }

  ngOnInit() {

  }

}
