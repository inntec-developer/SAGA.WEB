import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent {

  public filtradocandidatos: any;

  Filtrado(event){
    this.filtradocandidatos = event;
    console.log(this.filtradocandidatos);
  }
}
