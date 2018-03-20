import { Component, OnInit, Output } from '@angular/core';
import { PaisComponent } from './pais/pais.component';

import { CandidatosService } from '../../../../service/candidatos/candidatos.service';

export class Filter {
  constructor(public Id: number, public pais: string, public flag: string) { }
}

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
  providers:[CandidatosService]
})
export class BusquedaComponent implements OnInit {

 public paises: Filter[];

 constructor(private service: CandidatosService){}

  ngOnInit(){
    this.service.getpaises()
    .subscribe(data => {
      this.paises = data;
      console.log(this.paises);
    })
  }

}
