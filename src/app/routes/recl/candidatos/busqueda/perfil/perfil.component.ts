import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

// Servicios
import { CandidatosService } from '../../../../../service/index';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [CandidatosService]
})
export class PerfilComponent implements OnInit {

  // Declarar variables.
    Perfiles: any[];
    perfilCtrl: FormControl;
    filteredperfil: Observable<any[]>;

  constructor(private service: CandidatosService) {
    this.perfilCtrl = new FormControl();
  }

  ngOnInit() {
    this.service.getperfiles()
    .subscribe(data => {
      this.Perfiles = data;
      this.filteredperfil = this.perfilCtrl.valueChanges
        .pipe(startWith(''),
        map(perfil => perfil ? this.filterperfil(perfil) : this.Perfiles.slice()));
    })
  }

  filterperfil(perfil: string) {
    return this.Perfiles.filter(perfilexp =>
      perfilexp.perfilExperiencia.toLowerCase().indexOf(perfil.toLowerCase()) === 0);
  }


}
