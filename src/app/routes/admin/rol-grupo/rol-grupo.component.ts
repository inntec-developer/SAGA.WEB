import { style } from '@angular/animations';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { DatatableComponent } from '@swimlane/ngx-datatable';

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
  ListaRG: any = [];
  permisoRol: Array<any> = [];
  msj: string = "";
  alert = "";
  constructor(private service: AdminServiceService, public fb: FormBuilder) 
  {
    this.formRol = this.fb.group({
      slcRol: ['', [Validators.required]]
    })

  }

  onSelect(item: any) 
  {
    item.selected ? item.selected = false : item.selected = true; //para poner el backgroun cuando seleccione
   
    item.selected ? this.ListaRG.push(item) : this.ListaRG.splice(this.ListaRG.findIndex(x => x.id === item.id), 1); //agrega y quita el row seleccionado
  }

  addToRol($event)
  {
    console.log($event)
    // this.ListaRG.push($event);
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

    
     
      // this.service.AddPrivilegios(lrg)
      // .subscribe( data => {
      //   this.msj = data;
      //   console.log(this.msj);
      // });
      
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
    this.permisoRol = this.Roles.filter(item => item.id == id);

  }
  getGrupos()
  {
    this.Grupos = [];
    this.service.getGruposRoles()
    .subscribe(
      e=>{
        this.Grupos = e;

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
