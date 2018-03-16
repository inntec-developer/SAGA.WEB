import { Component, OnInit } from '@angular/core';
import { PaisComponent } from './pais/pais.component';

import { CandidatosService } from '../../../../service/candidatos/candidatos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
  providers:[CandidatosService]
})
export class BusquedaComponent implements OnInit {

 paises: any[];

 constructor(private service: CandidatosService){}

  ngOnInit(){
    this.service.getpaises()
    .subscribe(data => {
      this.paises = data.paises;
    })
  }

}
