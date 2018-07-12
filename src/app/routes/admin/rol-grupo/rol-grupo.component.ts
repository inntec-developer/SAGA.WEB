import { RollsStructComponent } from './../rolls-struct/rolls-struct.component';
import { style } from '@angular/animations';
import { element } from 'protractor';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-rol-grupo',
  templateUrl: './rol-grupo.component.html',
  styleUrls: ['./rol-grupo.component.scss'],
  providers:[ AdminServiceService ]
})
export class RolGrupoComponent implements OnInit, AfterViewInit {

  @ViewChild('Struct') someInput: RollsStructComponent;

  formRol: FormGroup;
  Grupos: Array<any> = [];
  Roles: Array<any> = [];
  ListaRG: any = [];
  StructList: Array<any> = [];
  filteredData: Array<any> = [];
  permisoRol: Array<any> = [];
  msj: string = "";
  alert = "";
  flag = false;
  constructor(private service: AdminServiceService, public fb: FormBuilder) 
  {
    this.formRol = this.fb.group({
      slcRol: ['', [Validators.required]]
    })

  }

  setData()
  {
    this.StructList = this.someInput.StructList;
    this.someInput.setStruct(this.filteredData)
  }
  
  onSelect(item: any) 
  {
    item.selected ? item.selected = false : item.selected = true; //para poner el backgroun cuando seleccione
   
    item.selected ? this.ListaRG.push(item) : this.ListaRG.splice(this.ListaRG.findIndex(x => x.id === item.id), 1); //agrega y quita el row seleccionado
  }

  addToRol($event)
  {
    console.log($event)
  }

  resetBasket() 
  {
    this.ListaRG = [];
    this.getGrupos();
  }

  popGrupo(p:any, i: any) 
  {
    this.Grupos.splice(i, 1)
  }

  saveData(RolId: any)
  {
    if(this.ListaRG.length > 0)
    {
      let lrg = [];

      for(let rg of this.ListaRG)
      {
        let element = {
          EntidadId: rg.id,
          RolId: RolId,         
        }
        lrg.push(element);
      }

      console.log(lrg)
      this.service.AddGroupRol(lrg)
      .subscribe( data => {
        this.msj = data;
        console.log(this.msj);
        this.ngOnInit();
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
    this.flag = true;
    var id = $event.target.value;
    this.permisoRol = this.Roles.filter(item => item.id == id);
    this.filteredData = this.StructList.filter(item => item.rolId == id)
    
     this.someInput.setStruct(this.filteredData)
    
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
      })
  }

  GetEntidades()
    {
      this.Grupos = [];
      this.service.GetEntidadesUG()
      .subscribe(
        e=>{
          this.Grupos = e;
          console.log(this.Grupos)
        })
    }
  
    DeleteUserRoles(user, rol)
    {
      console.log(user)
      console.log(rol)
        // var idx = this.listAux.findIndex(x => x.id == user);
  
        // if(idx != -1)
        // {
        //   this.listAux.splice(idx, 1)
        // }
  
        // let dts = { RolId: rol, EntidadId: user};
        // console.log(dts)
        // this.service.DeleteUserRol(dts)
        // .subscribe(
        //   e=>{
        //     console.log(e)
        //   })
  
    }

  ngOnInit() {
    this.GetEntidades();
    this.getRoles();
    this.setData();
    this.someInput.setStruct(this.filteredData)
    
  }

  ngAfterViewInit()
  {
    if(this.someInput)
    {
      this.setData();
    }
  }

}
