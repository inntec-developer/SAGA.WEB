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
    ListEntidades: Array<any> = [];
    ListaPG: Array<any> = [];
    listGrupos: Array<any> = [];
    ListaBorrar:  Array<any> = [];
    IdGrupo: any = null;
    alert: string = "Drag users here...";

    constructor( private service: AdminServiceService, public fb: FormBuilder )
    {}

    addToGroups($event, index)
    {
        // this.ListaPG.push($event.dragData);
      let g = $event;
       console.log(g)
       if(this.IdGrupo === g.id )
       {
         this.ListaPG.splice(index, 1)
       }
     }
 
    DeleteUsers($event, index)
    {
      console.log(this.IdGrupo)
      console.log(index)
      var idx = this.ListaPG.findIndex(x => x.entidadId === index);

      if(idx != -1)
      {
        this.ListaPG.splice(idx, 1)
      }

      let dts = { GrupoId: this.IdGrupo, EntidadId: index};
      console.log(dts)
      this.service.DeleteUserGroup(dts)
      .subscribe(
        e=>{
       
          console.log(e)
        })


    }
    resetBasket() {
        this.ListaPG = [];
        this.GetEntidades();
    }

    selected($event)
    {
      this.IdGrupo = $event.target.value; //dropdown grupos
      var idx = this.ListaPG.findIndex(x => x.id === this.IdGrupo);
      if(idx != -1)
      {
        this.ListaPG.splice(idx, 1)
      }
      this.GetUserByGroup(this.IdGrupo)
    }

    GetUserByGroup( Id )
    {
      this.service.GetUsuarioByGrupo(Id)
      .subscribe(
        e=>{
          this.ListaPG = e;
          console.log(this.ListaPG)
        })
    }

    addUsuarioGrupo()
    {
      let lug = [];
      if(this.ListaPG.length > 0)
      {
        for(let ug of this.ListaPG)
        {
          if( ug.id != this.IdGrupo )
          {
            lug.push({EntidadId: ug.id, GrupoId: this.IdGrupo});
          }
        }
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

    GetEntidades()
    {
      this.ListEntidades = [];
      this.service.GetEntidadesUG()
      .subscribe(
        e=>{
          this.ListEntidades = e;
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

    ngOnInit() {
      this.formAdmin = this.fb.group({
        slcGrupo: ['', [Validators.required]]
      });

      this.GetEntidades();
      this.GetGrupos();
    }



    ///////////////// no se usa ////////////
    //addToGroups($event)
    // {
    //   this.ListaPG.push($event.dragData);
    //    console.log($event)
    //  }
 
    //  popPerson(p, i) {
    //      this.ListEntidades.splice(i, 1)
    //      console.log($event)
    //    }

    // addToUsers($event)
    // {
    //   this.ListaPersonas.push($event.dragData);
    // }

     // 
    // UndoUser( u: any, index: any)
    // {
    //   console.log(u)
    //   console.log(index)
    //   this.ListaPG.splice(index, 1);
    // }

    // filtrar($event)
    // {
    //   this.ListaPersonas = [];
    //   this.service.GetUsuariosByDepa($event.target.value)
    //   .subscribe(
    //     e=>{
    //       this.ListaPersonas = e;
    //     })

    // }

    //


}
