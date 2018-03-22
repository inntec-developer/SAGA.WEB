import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-colonia',
  templateUrl: './colonia.component.html',
  styleUrls: ['./colonia.component.scss'],
  providers: [CandidatosService]
})
export class ColoniaComponent implements OnInit {

  // Variables
   @Input('Municipio') filtromunicipio: any;
   Colonias: any[];
   ColoniaCtrl: FormControl;
   filteredColonia: Observable<any[]>;

  constructor(private service: CandidatosService) {
    this.ColoniaCtrl = new FormControl();
  }

  filterColonia(colonia: string) {
    return this.Colonias.filter(col =>
        col.colonia.toLowerCase().indexOf(colonia.toLowerCase()) === 0);
  }

  ngOnInit() {
    this.service.getcolonias(this.filtromunicipio)
    .subscribe(data => {
      this.Colonias = data.colonias;
      this.filteredColonia = this.ColoniaCtrl.valueChanges
        .pipe(startWith(''),
          map(colonia => colonia ? this.filterColonia(colonia) : this.Colonias.slice())
        );
    })
  }

}
