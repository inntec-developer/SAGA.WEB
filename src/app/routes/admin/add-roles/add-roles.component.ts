import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import { create } from 'domain';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss'],
  providers: [ AdminServiceService ]
})

export class AddRolesComponent implements OnInit {

  formRoles: FormGroup;
  msj: string;
  Roles: Array<any> = [];
  editing = {};

  constructor(private service: AdminServiceService
              ,public fb: FormBuilder )
  {
    this.iniciarForm();
    this.msj = '';
  }

  iniciarForm()
  {
    this.formRoles = this.fb.group({
      Rol: ['', [Validators.required]],
      Create:0,
      Read:1,
      Update:0,
      Delete:0,
      Especial:0,
      Activo: 1
    });
   


  }
  updateValue($event, cell, rowIndex)
  {
    if(cell === 'rol')
    {
      
    this.editing[rowIndex + '-' + cell] = false;
    this.Roles[rowIndex][cell] = $event.target.value;
    }
    else
    {
      this.Roles[rowIndex][cell] = $event.checked;

    }
    this.Roles = [...this.Roles];
  }

  saveData(){

    this.service.AddRoles(this.formRoles.value)
    .subscribe( data => {
      this.msj = data;
      this.iniciarForm();
      this.getRoles();
    });

  }

  updateRol($event,rowIndex)
  {
    let rol = this.Roles[rowIndex]
    console.log(rol)
    this.service.UpdateRoles(rol)
      .subscribe( data => {
      this.msj = data;
      console.log(this.msj)
      this.iniciarForm();
      this.getRoles();
    });
  
  }


  DeleteRoles( $even, rowIndex: any )
  {
    let g = this.Roles[rowIndex]
    console.log(g)
    this.service.DeleteRoles(g)
      .subscribe( data => {
      this.msj = data;
      console.log(this.msj)
      this.iniciarForm();
      // this.getRoles();
        this.Roles.splice(rowIndex, 1);
    this.Roles = [...this.Roles];
    });
 
  
    
 alert("los datos se borraron")
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
    this.getRoles();
  }

}
