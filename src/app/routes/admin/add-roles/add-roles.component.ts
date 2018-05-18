import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';

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
  saveData(){

    this.service.AddRoles(this.formRoles.value)
    .subscribe( data => {
      this.msj = data;
      this.iniciarForm();
    });

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
