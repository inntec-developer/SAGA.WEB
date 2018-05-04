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
      this.popPerson($event.dragData)
    }

    resetBasket() {
        this.ListaPG = [];
        this.addPersonas();
    }

    orderedProduct($event) {
    }

    selected($event)
    {
      this.nomgrupo = $event.target.value;
      var mocos = this.listGrupos.indexOf(item => item.id === $event.target.value);
      //console.log(this.listGrupos.splice((item => item.id !== $event.target.value), 1))

    }

    popPerson(nemp:any) {
      this.ListaPersonas.splice((item => item === nemp.nombre), 1);
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
          console.log(e);
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
