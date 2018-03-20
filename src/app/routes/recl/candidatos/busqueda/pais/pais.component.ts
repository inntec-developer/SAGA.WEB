import { Component, Output, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class Filter {
  constructor(public Id: number, public pais: string, public flag: string) { }
}

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit{
// Declarar variables.
  @Input('paises') paises: Filter[];
  countryCtrl: FormControl;
  filteredCountry: Observable<any[]>;

  constructor() {
    this.countryCtrl = new FormControl();
    this.filteredCountry = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this.filterCountry(country) : this.paises.slice())
      );
  }

  ngOnInit(){

  }

  countries: Filter[] =
  [ { Id: 1, pais: 'Mexico', flag: './assets/img/flags-mini/Mexico.png'

    }, { Id: 2, pais: 'Estados Unidos', flag:
    'https://www.worldflags.es/imagenes/productos/1466p_USA.JPG' } ];

  filterCountry(pais: string) {
    return this.paises.filter(country =>
      country.pais.toLowerCase().indexOf(pais.toLowerCase()) === 0);
  }

}
