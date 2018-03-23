import { Component, OnInit } from '@angular/core';
import { Requis } from '../../../service/DisenioVacante/CatalogoRequi.service';
import { ActivatedRoute,Router} from '@angular/router/';
import {Http} from '@angular/http';
// import boostrap =  require('../../../shared/styles/bootstrap/_');


@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.scss'],
  providers:[Requis]
})
export class VacantesComponent implements OnInit {
public datos : any[]
  constructor(
    private service: Requis
    ,private http: Http
    ,private route: ActivatedRoute
    ,private router: Router
  ) { }

  ngOnInit() {
    this.service.getRequis()
    .subscribe(
      e=>{
        this.datos = e;
      })
  }

  Onclick(){

    this.router.navigate(['/reclutamiento/disenador']);
    //this.router.navigate(['/systems'], { queryParams: { x: x } });
   //window.location.href = '/reclutamiento/disenador';
  }
}
