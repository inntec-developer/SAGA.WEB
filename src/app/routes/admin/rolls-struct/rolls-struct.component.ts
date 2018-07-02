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

  constructor(private service: AdminServiceService) { }
  
  GuardarCambios(row: any)
  {
    this.service.UpdatePrivilegios(row)
      .subscribe(data => {
        console.log(data)
        this.ngOnInit()

      });
  
  
    console.log(row);
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

  ngOnInit() {
    this.GetEstructura();
  }

}
