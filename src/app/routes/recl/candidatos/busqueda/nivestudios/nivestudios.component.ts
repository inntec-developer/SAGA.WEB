import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-nivestudios',
  templateUrl: './nivestudios.component.html',
  styleUrls: ['./nivestudios.component.scss'],
  providers: [CandidatosService]
})
export class NivestudiosComponent implements OnInit {

  // Declarar variables.
    nvestuidios: any[];
    nvestudiosCtrl: FormControl;
    filterednvestudios: Observable<any[]>;

  constructor(private service: CandidatosService) {
    this.nvestudiosCtrl = new FormControl();
  }

  ngOnInit() {
    this.service.getnivelestudio()
    .subscribe(data => {
      this.nvestuidios = data;
      this.filterednvestudios = this.nvestudiosCtrl.valueChanges
        .pipe(startWith(''),
        map(nv => nv ? this.filternvestudio(nv) : this.nvestuidios.slice()));
    })
  }

  filternvestudio(nvest: string) {
    return this.nvestuidios.filter(nv =>
      nv.gradoEstudio.toLowerCase().indexOf(nvest.toLowerCase()) === 0);
  }


}
