import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class Filter {
  constructor(public Id: number, public pais: string) { }
}

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent {
// Declarar variables.
  countryCtrl: FormControl;
  filteredCountry: Observable<any[]>;

  countries: Filter[] =[
    { Id: 1, pais: 'Mexico'},
    { Id: 2, pais: 'Estados Unidos'}
  ];

  constructor() {
    this.countryCtrl = new FormControl();
    this.filteredCountry = this.countryCtrl.valueChanges
      .pipe(
      startWith(''),
      map(pais => pais ? this.filterCountry(pais) : this.countries.slice()));
  }

  filterCountry(pais: string) {
    return this.countries.filter(country =>
      country.pais.toLowerCase().indexOf(pais.toLowerCase()) === 0);
  }

}
