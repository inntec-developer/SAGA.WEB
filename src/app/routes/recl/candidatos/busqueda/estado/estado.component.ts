import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class Filter {
  constructor(public name: string, public flag: string) { }
}

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent {

  StatesCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: Filter[] = [
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
  this.StatesCtrl = new FormControl();
  this.filteredStates = this.StatesCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this.filterState(state) : this.states.slice())
    );
    console.log(this.states);
  }

  filterState(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}
