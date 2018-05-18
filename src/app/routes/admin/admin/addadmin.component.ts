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
    ListDepas: Array<any> = [];
    listGrupos:  Array<any> = [];
    IdGrupo: any = null;

    public value: any[];


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

    filtrar($event)
    {
      console.log($event.target.value)
      this.service.GetUsuariosByDepa($event.target.value)
      .subscribe(
        e=>{
          this.ListaPersonas = [];
          this.ListaPersonas = e;
        })

    }

    selected($event)
    {
      this.IdGrupo = $event.target.value;
    }

    ngOnInit() {
      this.addPersonas();
      this.GetGrupos();
      this.getDepartamentos();
    }

    addUsuarioGrupo()
    {

      let lug = [];

      for(let ug of this.ListaPG)
      {
        lug.push({UsuarioId: ug.id, GrupoId: this.IdGrupo});
      }

      console.log(lug)
      this.service.addUserGroup( lug )
      .subscribe( data => {
        console.log(data);
      });
      lug = [];
      this.resetBasket();

    }

    addPersonas()
    {
      this.service.getPersonas()
      .subscribe(
        e=>{
          this.ListaPersonas = e;
        })
    }

    GetGrupos()
    {
      this.service.getGrupos()
      .subscribe(
        e=>{
          this.listGrupos = e;
          console.log(e)
        })
    }

    getDepartamentos()
    {
      this.service.getDepas()
      .subscribe(
        e=>{
          this.ListDepas = e;
        })
    }

}
