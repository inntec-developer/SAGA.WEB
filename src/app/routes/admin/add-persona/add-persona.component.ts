import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UploadImgsComponent } from './../upload-imgs/upload-imgs.component';

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

  @ViewChild('uploadImg') someInput: UploadImgsComponent;

  constructor(private service: AdminServiceService ,public fb: FormBuilder, public dialog: MatDialog){}
  
  CrearURL(idP: any)
  {
    this.name = idP;
    console.log(this.name)
  }

  updateFoto()
  {
    this.Users[this.rowAux]['foto'] = 'http://localhost:33333/utilerias/' + this.someInput.name;
    this.Users = [...this.Users];
    console.log(this.Users)
    this.bandera = false;
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
    if(this.someInput)
    {
      this.updateFoto();
    }
  }

}


