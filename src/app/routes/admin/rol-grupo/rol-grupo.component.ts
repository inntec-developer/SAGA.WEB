import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-rol-grupo',
  templateUrl: './rol-grupo.component.html',
  styleUrls: ['./rol-grupo.component.scss'],
  providers:[ AdminServiceService ]
})
export class RolGrupoComponent implements OnInit {

  formRol: FormGroup;
  Grupos: Array<any> = [];
  Roles: Array<any> = [];
  ListaRG: Array<any> = [];
  permisoRol: Array<any> = [];
  msj: string = "";
  alert: string = "Drag group here...";
  constructor(private service: AdminServiceService, public fb: FormBuilder) 
  {
    this.formRol = this.fb.group({
      slcRol: ['', [Validators.required]]
    })

  }

  addToRol($event)
  {
    console.log($event.dragData)
    this.ListaRG.push($event.dragData);
  }

  resetBasket() {
      this.ListaRG = [];
      this.getGrupos();
  }

  popGrupo(p:any, i: any) {
    console.log(i)

    this.Grupos.splice(i, 1)


  }

  saveData(RolId: any){

    if(this.ListaRG.length > 0)
    {
      let lrg = [];

      for(let rg of this.ListaRG)
      {
        let element = {
          EntidadId: rg.id,
          RolId: RolId,         
          Tipo: 2
        }
        lrg.push(element);
      }

    
     
      this.service.AddPrivilegios(lrg)
      .subscribe( data => {
        this.msj = data;
        console.log(this.msj);
      });
      
      this.ListaRG = [];
    }
    else
    {
      this.alert = "Debe agregar al menos un grupo";
    }
  }

  selected($event, rol: any)
  {
    var id = $event.target.value;
    console.log(id)

    this.permisoRol = this.Roles.filter(item => item.id == id);

  }
  getGrupos()
  {
    this.Grupos = [];
    this.service.getGruposRoles()
    .subscribe(
      e=>{
        this.Grupos = e;
        console.log(this.Grupos)
      })

  }

  getRoles()
  {
    this.service.getRoles()
    .subscribe(
      e=>{
        this.Roles = e;
        console.log(this.Roles)
      })

  }

  ngOnInit() {
    this.getGrupos();
    this.getRoles();
  }

}
