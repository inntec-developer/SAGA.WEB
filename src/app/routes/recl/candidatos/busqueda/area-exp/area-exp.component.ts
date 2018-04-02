import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-area-exp',
  templateUrl: './area-exp.component.html',
  styleUrls: ['./area-exp.component.scss'],
  providers: [CandidatosService]
})
export class AreaExpComponent implements OnInit {
  // Declarar variables.
    Areasexp: any[];
    aresexpCtrl: FormControl;
    filteredareaexp: Observable<any[]>;

  constructor(private service: CandidatosService) {
    this.aresexpCtrl = new FormControl();
  }

  ngOnInit() {
    this.service.getareasexp()
    .subscribe(data => {
      this.Areasexp = data;
      this.filteredareaexp = this.aresexpCtrl.valueChanges
        .pipe(startWith(''),
        map(area => area ? this.filterareaexp(area) : this.Areasexp.slice()));
    })
  }

  filterareaexp(area: string) {
    return this.Areasexp.filter(areaexp =>
      areaexp.areaExperiencia.toLowerCase().indexOf(area.toLowerCase()) === 0);
  }

}
