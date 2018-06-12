import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss'],
  providers:[ AdminServiceService ]
})

export class AddadminComponent implements OnInit {

    formAdmin: FormGroup;
    ListaPersonas: Array<any> = [];
    ListaPG: Array<any> = [];
    ListDepas: Array<any> = [];
    listGrupos:  Array<any> = [];
    IdGrupo: any = null;
    alert: string = "Drag users here...";
    public value: any[];


    constructor( private service: AdminServiceService, public fb: FormBuilder )
    {
      
    }

    addToGroups($event)
    {
      this.ListaPG.push($event.dragData);
    }

    addToUsers($event)
    {
      this.ListaPersonas.push($event.dragData);
    }

    resetBasket() {
        this.ListaPG = [];
        this.listGrupos = [];
        this.ngOnInit();

    }

    popPerson(p:any, i: any) {
      this.ListaPersonas.splice(i, 1)
    }
    UndoUser( u: any, index: any)
    {
      console.log(u)
      console.log(index)
      this.ListaPG.splice(index, 1);
    }

    filtrar($event)
    {
      this.ListaPersonas = [];
      this.service.GetUsuariosByDepa($event.target.value)
      .subscribe(
        e=>{
          this.ListaPersonas = e;
        })

    }

    selected($event)
    {
      this.IdGrupo = $event.target.value;
    }

    addUsuarioGrupo()
    {
      let lug = [];
      if(this.ListaPG.length > 0)
      {
        for(let ug of this.ListaPG)
        {
          lug.push({UsuarioId: ug.id, GrupoId: this.IdGrupo});
        }
        console.log(lug)
        this.service.addUserGroup( lug )
        .subscribe( data => {
          this.ListaPG = [];
          this.ngOnInit();
        });
        
      }
      else
      {
        this.alert = "Debe agregar al menos un usuario";
      }

    }

    addPersonas()
    {
      this.ListaPersonas = [];
      this.service.getPersonas()
      .subscribe(
        e=>{
          this.ListaPersonas = e;
        })
    }

    GetGrupos()
    {
      this.listGrupos = [];
      this.service.getGrupos()
      .subscribe(
        e=>{
          this.listGrupos = e;
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

    ngOnInit() {
      this.formAdmin = this.fb.group({
        slcGrupo: ['', [Validators.required]]
      });

      this.addPersonas();
      this.GetGrupos();
      // this.getDepartamentos();

    }

}
