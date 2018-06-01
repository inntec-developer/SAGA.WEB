import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
const swal = require('sweetalert');

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss'],
  providers:[ AdminServiceService ]

})
export class AddPersonaComponent implements OnInit {

  Users: Array<any> = [];
  msj: string = '';
  ListDepas: Array<any> = [];
  ListTipos: Array<any> = [];
  editing = {};
  bandera = false;
  rowAux: any;
  url: string = 'https://localhost:4200/assets/';

  constructor(private service: AdminServiceService ,public fb: FormBuilder, public dialog: MatDialog){}
  
  CrearURL(idP: any)
  {
    this.url = this.url + 'id:' + idP;
    console.log(this.url)
  }

  updateFoto()
  {
     console.log('entro')
    this.Users[this.rowAux]['foto'] = 'assets/img/user/01.jpg';
   this.bandera = false;
    console.log(this.url)

  }

  updateValue(event, cell, rowIndex) 
  {
    var aux;
    if (cell === "tipoUsuarioId") 
    {
      aux = this.ListTipos.find(nt => nt.id == event.target.value);
      this.Users[rowIndex]['tipoUsuario'] = aux.tipo;
      this.editing[rowIndex + '-' + 'tipoUsuario'] = false;
    }
    else if (cell === "departamentoId") 
    {
      aux = this.ListDepas.find(nd => nd.id == event.target.value);
      this.Users[rowIndex]['departamento'] = aux.nombre;
      this.editing[rowIndex + '-' + 'departamento'] = false;
    }

    this.editing[rowIndex + '-' + cell] = false;
    this.Users[rowIndex][cell] = event.target.value;

    this.Users = [...this.Users];
    console.log(this.Users)
  }

  updateUser($even, rowIndex) 
  {
    let u = this.Users[rowIndex];
    console.log(u)

    this.service.UpdateUsuario(u)
      .subscribe(data => {
        this.msj = data;
        console.log(this.msj)
        this.ngOnInit();
      });
  }

  Actualizar($ev, id: any)
  {
    this.service.UDActivoUsers(id, $ev.target.checked )
        .subscribe( data => {
        this.msj = data;
        this.getUsuarios();
        });
  }

  getUsuarios()
  {
    this.service.getPersonas()
    .subscribe(
      e=>{
        this.Users = e;
        console.log(this.Users)
      })
  }

  setFoto($event, rowIndex)
  {
    this.bandera = true;
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

}


