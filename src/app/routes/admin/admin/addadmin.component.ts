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
    ListAuxEntidades: Array<any> = [];

    ListaPG: Array<any> = [];
    listGrupos: Array<any> = [];
    ListaBorrar:  Array<any> = [];
    IdGrupo: any = null;
    alert: string = "Drag users here...";
    draggable = false;
   
   

    constructor( private service: AdminServiceService, public fb: FormBuilder )
    {}    

    addToGroups($event, index)
    {

      this.ListaPG.push($event);
      let g = $event;

       console.log(g)
//el drag me agrega solo el item por eso lo borro por que se repite

       var idx = this.ListaPG.findIndex(x => x.entidadId == g.entidadId);

       if(idx != -1)
       {
         this.ListaPG.splice(idx, 1)
       }
 
    }

    DeleteUsers(grupo, user, index)
    {
      console.log(grupo)
      console.log(user)
      var idx = this.ListaPG.findIndex(x => x.entidadId === user);

      if(idx != -1)
      {
        this.ListaPG.splice(idx, 1)
      }

      let dts = { GrupoId: grupo, EntidadId: user};
      console.log(dts)
       this.service.DeleteUserGroup(dts)
      .subscribe(
        e=>{
          this.GetEntidades();
          console.log(e)

        })


    }
    resetBasket() {
        this.ListaPG = [];
        this.GetEntidades();
    }

    selected($event)
    {
      this.draggable = true;
      this.IdGrupo = $event.target.value; //dropdown grupos

      this.GetUserByGroup($event.target.value)

      //por si arrastras un usuario y despues selecionas un grupo donde esta incluido el usuario i.e. para que no se repita el usuario
      //ya no es necesario por que no puedes hacer el drag a menos que selecciones un grupo 

      // var idx = this.ListaPG.findIndex(x => x.id == $event.target.value);

      // if(idx != -1)
      // {
      //   this.ListaPG.splice(idx, 1)
      // }


      
    }

    GetUserByGroup( Id )
    {
      this.ListAuxEntidades = [];
      this.service.GetUsuarioByGrupo(Id)
      .subscribe(
        e=>{
          this.ListaPG = e; //para llenar el panel donde se hace drop solo se utiliza npara cunado le den select to grupo      
        })
    }

    addUsuarioGrupo()
    {

      let lug = [];

       var uniq = this.ListaPG.filter( (elem, pos, arr) => {
          return elem.grupos.findIndex(x => x.id == this.IdGrupo) < 0
      
       }); //me regresa los que no estan repetidos


      if(uniq.length > 0)
      {
        for(let ug of uniq)
        {
           lug.push({EntidadId: ug.entidadId, GrupoId: this.IdGrupo});
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
      console.log(lug)
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
