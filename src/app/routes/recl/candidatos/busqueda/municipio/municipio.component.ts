import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class Filter {
  constructor(public name: string, public flag: string) { }
}

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss']
})
export class MunicipioComponent implements OnInit {

  MunicipioCtrl: FormControl;
  filteredMunicipio: Observable<any[]>;

  municipios: Filter[] = [
    {
      name: 'Jalisco',
      flag: 'http://www.esacademic.com/pictures/eswiki/80/Proposed_flag_for_Jalisco.png'
    },
    {
      name: 'Edo. de México',
      flag: 'https://vignette.wikia.nocookie.net/althistory/images/f/f3/Bandera_del_Estado_de_M%C3%A9xico.png/revision/latest?cb=20141228224100&path-prefix=es'
    }
  ];

  constructor() {
  this.MunicipioCtrl = new FormControl();
  this.filteredMunicipio = this.MunicipioCtrl.valueChanges
    .pipe(
      startWith(''),
      map(municipio => municipio ? this.filterMunicipio(municipio) : this.municipios.slice())
    );
    console.log(this.municipios);
  }

  filterMunicipio(name: string) {
    return this.municipios.filter(municipio =>
      municipio.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
  }

}
