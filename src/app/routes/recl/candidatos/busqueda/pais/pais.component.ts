import { Component, Output, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class Filter {
  constructor(public name: string, public flag: string) { }
}

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent {

  @Input() paises: any[];

  console.log(this.paises);

  countryCtrl: FormControl;
  filteredCountry: Observable<any[]>;
  pais = 'Mexico';
  countries: Filter[] = [
    {
      name: 'Mexico',
      flag: './assets/img/flags-mini/'+this.pais+'.png'

    },
    {
      name: 'Estados Unidos',
      flag: 'https://www.worldflags.es/imagenes/productos/1466p_USA.JPG'
    }
  ];

  constructor() {
    this.countryCtrl = new FormControl();
    this.filteredCountry = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this.filterCountry(country) : this.countries.slice())
      );
      console.log(this.countries);
  }

  filterCountry(name: string) {
    return this.countries.filter(country =>
      country.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}
