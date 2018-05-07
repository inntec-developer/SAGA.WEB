import { Component, OnInit } from '@angular/core';
import { Product } from './admin.list';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';


@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss'],
  providers:[ AdminServiceService ]
})

export class AddadminComponent implements OnInit {

    ListaPersonas: Array<any> = [];
    ListaPG: Array<any> = [];
    listGrupos:  Array<any> = [];

    public value: any[];
    public nomgrupo: string;

    constructor( private service: AdminServiceService ) {}

    addToGroups($event)
    {
      this.ListaPG.push($event.dragData);
    }

    resetBasket() {
        this.ListaPG = [];
        this.addPersonas();
    }

    popPerson(p: any, i: any) {
      this.ListaPersonas.splice(i, 1)
    }

    selected($event)
    {
      this.nomgrupo = $event.target.value;
    }

    ngOnInit() {
      this.addPersonas();
      this.getTiposU();
    }

    addPersonas()
    {
      this.service.getPersonas()
      .subscribe(
        e=>{
          this.ListaPersonas = e;
        })
    }

    getTiposU()
    {
      this.service.getTipos()
      .subscribe(
        e=>{
          this.listGrupos = e;
        })
    }

}
