import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {MatDialog } from '@angular/material';
import { UploadImgsComponent } from './../upload-imgs/upload-imgs.component';
import { ApiConection } from '../../../service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss'],
  providers:[ AdminServiceService ]

})
export class AddPersonaComponent implements OnInit, AfterViewInit {

  Users: Array<any> = [];
  ListDepas: Array<any> = [];
  ListTipos: Array<any> = [];
  editing = {};
  bandera = false;
  rowAux: any;
  name: string;
  filteredData: Array<any> = [];
  paginacion = [];
  pagIndex = 0;

  @ViewChild('uploadImg') someInput: UploadImgsComponent;
  @ViewChild('staticModal') modal;

  constructor(private service: AdminServiceService ,public fb: FormBuilder, public dialog: MatDialog){}
  
  CrearURL(idP: any)
  {
    this.name = idP;
  }

  CrearPaginacion(pag)
  {
    console.log(pag)
    this.paginacion = this.Users;
    this.Users = this.filteredData;

    this.pagIndex = pag;

  
    this.Users = this.Users.slice((pag-1) * 5, pag * 5)

  }

  updateFoto()
  {
    this.name = this.name + '.' + this.someInput.selectedFile.type.split('/')[1];

    this.service.UploadImg(this.someInput.selectedFile, this.name)
      .subscribe( data => {
        console.log(data)

        if(data.ok)
        {
          this.Users[this.rowAux]['foto'] = 'utilerias/img/user/' + this.name;
          this.Users[this.rowAux]['fotoAux'] = ApiConection.ServiceUrlFoto + 'utilerias/img/user/' + this.name;
          this.Users = [...this.Users];
          
          this.closeModal();
        }

    }); 
    
  }

  closeModal()
  {
    this.someInput.removeItem();
    this.someInput.selectedFile = null;

    this.modal.hide();

  }

  public Search(data: any) {

    let tempArray: Array<any> = [];
    let colFiltar: Array<any> = [{ title: "clave" },{ title: "apellidoPaterno" }, { title: "nombre" }];

    this.filteredData.forEach(function (item) {
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

    this.Users = tempArray;
    // this.filteredData = this.StructList.filter(function(item){
    //             return item['nombre'].match(data.target.value);
    //         });

  }

  
  updateValue(event, cell, rowIndex) 
  {
    var aux;
    if (cell === "tipoUsuarioId") 
    {
      aux = this.ListTipos.find(nt => nt.id == event.target.value);
      this.Users[rowIndex]['tipoUsuario'] = aux.tipo;
      this.Users[rowIndex]['tipoUsuarioId'] = event.target.value;
      this.editing[rowIndex + '-' + 'tipoUsuario'] = false;
    }
    else if (cell === "departamentoId") 
    {
      aux = this.ListDepas.find(nd => nd.id == event.target.value);
      this.Users[rowIndex]['departamento'] = aux.nombre;
      this.Users[rowIndex]['departamentoId'] = event.target.value;
      this.editing[rowIndex + '-' + 'departamento'] = false;
    }
    else if(event.target.value !== '')
    {
      this.Users[rowIndex][cell] = event.target.value;
    }

    this.editing[rowIndex + '-' + cell] = false;
    this.Users = [...this.Users];
  }

  updateUser($even, rowIndex) 
  {
    let u = this.Users[rowIndex];
    this.service.UpdateUsuario(u)
      .subscribe(data => {
        console.log(data)
        this.ngOnInit();
      });
  }

  Actualizar($ev, id: any)
  {
    this.service.UDActivoUsers(id, $ev.target.checked )
        .subscribe( data => {
          console.log(data)
          this.getUsuarios();
        });
  }

  getUsuarios()
  {
    this.service.getPersonas()
    .subscribe(
      e=>{
        this.Users = e;
        this.filteredData = e;
        this.paginacion = this.Users.slice(0, (this.Users.length / 10 ) );

        this.Users.forEach(item => {
          item.fotoAux = ApiConection.ServiceUrlFoto + item.foto
        })



        //this.Users = this.Users.slice(0, 10)

        // for(var c = 0; c <= this.Users.length / 5; c++)
        // {
        //   this.paginacion.push(c);

        // }
      console.log(this.Users)
      })
  }
  
  getDepartamentos()
  {
    this.service.getDepas()
      .subscribe(
        e => {
          this.ListDepas = e;
        })
  }

  getTipos() 
  {
    this.service.getTipos()
      .subscribe(
        e => {
          this.ListTipos = e;
        })
  }

  ngOnInit() 
  {
    this.getUsuarios();
    this.getDepartamentos();
    this.getTipos();
    
  }
  ngAfterViewInit()
  {
  }

}


