import { UploadImgsComponent } from './../upload-imgs/upload-imgs.component';
import { Component, OnInit, OnDestroy, Inject, ViewChild } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-grupo',
  templateUrl: './add-grupo.component.html',
  styleUrls: ['./add-grupo.component.scss'],
  providers:[ AdminServiceService ]
})
export class AddGrupoComponent implements OnInit {

  @ViewChild(UploadImgsComponent) public uploadImgs: UploadImgsComponent;

  formGrupos: FormGroup;
  msj: string;
  Grupos: Array<any> = [];
  editing = {};
  bandera=false;
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

  updateValue($event, cell, rowIndex)
  {
    if(cell === 'activo')
    {
      this.Grupos[rowIndex][cell] = $event.checked;
    }
    else
    {
      this.editing[rowIndex + '-' + cell] = false;
      this.Grupos[rowIndex][cell] = $event.target.value;
    }
    this.Grupos = [...this.Grupos];
  }
  getGrupos()
  {
    this.service.getGrupos()
    .subscribe(
      e=>{
        this.Grupos = e;
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

  updateGrupo($event,rowIndex)
  {
    let gu = this.Grupos[rowIndex]
    console.log(gu)
    this.service.UpdateGrupo(gu)
      .subscribe( data => {
      this.msj = data;
      console.log(this.msj)
      this.iniciarForm();
      this.getGrupos();
    });
  
  }

  DeleteGrupo( $even, rowIndex: any ) 
  {
    let g = this.Grupos[rowIndex]
    console.log(g)
    this.service.DeleteGrupo(g)
      .subscribe( data => {
      this.msj = data;
      console.log(this.msj)
      this.iniciarForm();
      this.getGrupos();
    });

    // this.Grupos.splice(rowIndex, 1);
    // this.Grupos = [...this.Grupos];
    
 alert("los datos se borraron")

}
  ngOnInit() {
    this.getGrupos();

  }

}
