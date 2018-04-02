import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-pcondiscapacidad',
  templateUrl: './pcondiscapacidad.component.html',
  styleUrls: ['./pcondiscapacidad.component.scss'],
  providers: [CandidatosService]
})
export class PcondiscapacidadComponent implements OnInit {

  // Declarar variables.
    pdiscapacidades: any[];
    pdiscapacidadCtrl: FormControl;
    filteredpdiscapacidad: Observable<any[]>;

  constructor(private service: CandidatosService) {
    this.pdiscapacidadCtrl = new FormControl();
  }

  ngOnInit() {
    this.service.getdiscapacidad()
    .subscribe(data => {
      this.pdiscapacidades = data;
      this.filteredpdiscapacidad = this.pdiscapacidadCtrl.valueChanges
        .pipe(startWith(''),
        map(pdis => pdis ? this.filterpdiscapacidad(pdis) : this.pdiscapacidades.slice()));
    })
  }

  filterpdiscapacidad(pdiscapa: string) {
    return this.pdiscapacidades.filter(pdisc =>
      pdisc.tipoDiscapacidad.toLowerCase().indexOf(pdiscapa.toLowerCase()) === 0);
  }

}
