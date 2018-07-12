import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';

import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {BrowserModule} from '@angular/platform-browser'
import { Element } from './../../recl/candidatos/dt-vacantes/dt-vacantes.component';
import {MatCheckbox} from '@angular/material';

@Component({
  selector: 'app-rolls-struct',
  templateUrl: './rolls-struct.component.html',
  styleUrls: ['./rolls-struct.component.scss'],
  providers:[ AdminServiceService ]
})
export class RollsStructComponent implements OnInit {

  @Input() public StructList: Array<any> = null; // Url api process upload
  @Input() public ocultar = false;
  
  @Output('onItemChanged') public onItemChanged = new EventEmitter();
  columns = [

    { title: 'ROL' },
    { title: 'NOMBRE ESTRUCTURA' },
    { title: "CREAR" },
    { title: "LEER" },
    { title: "MODIFICAR" },
    { title: "BORRAR" },
    { title: "ESPECIAL" }
  ]
  filteredData: Array<any> = [];
  editing = {};
  listRoles: Array<any> = [];
  listEntidades: Array<any> = [];
  listAux: Array<any> = [];
  constructor(private service: AdminServiceService) { }
  
  GuardarCambios(row: any)
  {
    console.log(row)
    this.service.UpdatePrivilegios(row)
      .subscribe(data => {
        console.log(data)
        this.ngOnInit()

      });
  
  
    console.log(row);
  }

  BorrarEstructura(row: any)
  {
    console.log(row)
  }
  public Search(data: any) {

    let tempArray: Array<any> = [];
    let colFiltar: Array<any> = [{ title: "rol" }, { title: "nombre" }];

    this.StructList.forEach(function (item) {
      let flag = false;
      colFiltar.forEach(function (c) {
        if (item[c.title].toString().match(data.target.value)) {
          flag = true;
        }
      });

      if (flag) {
        tempArray.push(item)
      }
    });

    this.filteredData = tempArray;
    // this.filteredData = this.StructList.filter(function(item){
    //             return item['nombre'].match(data.target.value);
    //         });

  }

  DeleteUserRoles(user, rol)
  {
      var idx = this.listAux.findIndex(x => x.id == user);

      if(idx != -1)
      {
        this.listAux.splice(idx, 1)
      }

      let dts = { RolId: rol, EntidadId: user};
      console.log(dts)
      this.service.DeleteUserRol(dts)
      .subscribe(
        e=>{
          console.log(e)
        })

  }

  setData() {
    this.onItemChanged.emit(this.StructList);
  }

  setStruct(data: any) {
    this.filteredData = data;

  }

  GetEstructura() {
    this.service.GetEstructuraRoles()
      .subscribe(
        e => {
          this.StructList = e;
          this.filteredData = e;
          this.setData();
          console.log(this.StructList)
        })
  }

  selected(value)
  {
    this.listAux = [];
    let aux = [];
    console.log(value)
    let tempArray: Array<any> = [];

    this.filteredData = this.StructList.filter(function(item){
      return item.rolId == value

    });
    this.listEntidades.forEach(element => {
      aux = element.roles.filter(function(item)
        {
          return item.id == value;

        })
      if(aux.length > 0)
      {
        this.listAux.push(element)
      }
      
    });
  }

  DeleteRoles(id)
  {
    console.log(id)
    this.service.DeleteRoles(id)
      .subscribe( data => {
        this.ngOnInit();
        alert("los datos se borraron")
    });

 }

 GetRoles()
  {
    this.service.getRoles()
    .subscribe(
      e=>{
        this.listRoles = e;
      })
  }
  GetEntidades()
  {
    this.service.GetEntidadesUG()
    .subscribe(
      e=>{
        this.listEntidades = e;
        console.log(this.listEntidades)
      })
  }

  ngOnInit() {
    this.GetEstructura();
    this.GetRoles();
    this.GetEntidades();
  }

}


/////////////distinct 
// this.listRoles = this.StructList.reduce((p, c) => 
// p.findIndex(e => e.rolId === c.rolId)<0 ? [...p,c]: p,[]);