import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
  providers: [CandidatosService]
})
export class IdiomasComponent implements OnInit {

  // Declarar variables.
    idiomas: any[];
    idiomasCtrl: FormControl;
    filteredidiomas: Observable<any[]>;

  constructor(private service: CandidatosService) {
    this.idiomasCtrl = new FormControl();
  }

  ngOnInit() {
    this.service.getidiomas()
    .subscribe(data => {
      this.idiomas = data;
      this.filteredidiomas = this.idiomasCtrl.valueChanges
        .pipe(startWith(''),
        map(id => id ? this.filternvestudio(id) : this.idiomas.slice()));
    })
  }

  filternvestudio(idiom: string) {
    return this.idiomas.filter(id =>
      id.idioma.toLowerCase().indexOf(idiom.toLowerCase()) === 0);
  }

}
