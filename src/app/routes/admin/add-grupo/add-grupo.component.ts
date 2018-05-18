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
  Grupos: Array<any> = [];
  constructor( public fb: FormBuilder, private service: AdminServiceService )
  {
    this.iniciarForm();
    this.msj = '';
  }

  iniciarForm()
  {
      this.formGrupos = this.fb.group({
      Nombre: ['', [Validators.required]],
      Descripcion: "",
      Activo: 1

    });

  }

  getGrupos()
  {
    this.service.getGrupos()
    .subscribe(
      e=>{
        this.Grupos = e;
        console.log(this.Grupos)
      })

  }

  saveData()
  {
    this.service.addGrupos(this.formGrupos.value)
    .subscribe( data => {
     this.msj = data;
     this.iniciarForm();
     this.getGrupos();
    });
  }

  ngOnInit() {
    this.getGrupos();

  }

}
