import { Element } from './../../recl/candidatos/dt-vacantes/dt-vacantes.component';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewChecked, ViewContainerRef, ElementRef } from '@angular/core';
import {MatCheckbox} from '@angular/material';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {BrowserModule} from '@angular/platform-browser'

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
    { title: "BORRAR" },
    { title: "MODIFICAR" },
    { title: "ESPECIAL" }
  ]
  filteredData: Array<any> = [];
  editing = {};
  listRoles: Array<any> = [];

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
    let tempArray: Array<any> = [];

    this.StructList.forEach(function (item) {

       if (item.rolId == value) {
         tempArray.push(item)
      }
    });

    this.filteredData = tempArray;

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
        console.log(this.listRoles)
      })
  }
  ngOnInit() {
    this.GetEstructura();
    this.GetRoles();
  }

}


/////////////distinct 
// this.listRoles = this.StructList.reduce((p, c) => 
// p.findIndex(e => e.rolId === c.rolId)<0 ? [...p,c]: p,[]);