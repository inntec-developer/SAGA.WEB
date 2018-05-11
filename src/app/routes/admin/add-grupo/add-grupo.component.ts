import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-add-grupo',
  templateUrl: './add-grupo.component.html',
  styleUrls: ['./add-grupo.component.scss'],
  providers:[ AdminServiceService ]
})
export class AddGrupoComponent implements OnInit {

  formGrupos: FormGroup;
  msj: string;

  constructor( public fb: FormBuilder, private service: AdminServiceService )
  {
    this.iniciarForm();
    this.msj = '';
  }

  iniciarForm()
  {
      this.formGrupos = this.fb.group({
      Grupo: ['', [Validators.required]],
      Descripcion: "",
      Activo: 1

    });

  }

  saveData()
  {
    this.service.addGrupos(this.formGrupos.value)
    .subscribe( data => {
     this.msj = data;
     this.iniciarForm();
    });
  }

  ngOnInit() {

  }

}
