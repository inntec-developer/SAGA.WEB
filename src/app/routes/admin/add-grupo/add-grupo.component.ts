import { UploadImgsComponent } from './../upload-imgs/upload-imgs.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiConection } from '../../../service';


@Component({
  selector: 'app-add-grupo',
  templateUrl: './add-grupo.component.html',
  styleUrls: ['./add-grupo.component.scss'],
  providers:[ AdminServiceService ]
})
export class AddGrupoComponent implements OnInit {

  @ViewChild('uploadImg') someInput: UploadImgsComponent;
  @ViewChild('staticModal') modal;

  formGrupos: FormGroup;
  Grupos: Array<any> = [];
  editing = {};
  name: string;
  rowAux: any;
  UsuariosList: Array<any> = [];

  constructor( public fb: FormBuilder, private service: AdminServiceService )
  {
    this.iniciarForm();
  }

  CrearURL(idG: any)
  {
    this.name = idG;
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
      if($event.target.value !== '')
      {
        this.Grupos[rowIndex][cell] = $event.target.value;
      }
      this.editing[rowIndex + '-' + cell] = false;
    }
    this.Grupos = [...this.Grupos];
  }

  getGrupos()
  {
    this.service.getGrupos()
    .subscribe(
      e=>{
        this.Grupos = e;
      });
  }

  GetUsuarios(GrupoId : any)
  {
    console.log(GrupoId)
    this.service.GetUsuarioByGrupo(GrupoId)
    .subscribe(
      e=>{
        this.UsuariosList = e;
      });
  }

  saveData()
  {
    let grupo = {
      Nombre: this.formGrupos.controls['Nombre'].value,
      Descripcion: this.formGrupos.controls['Descripcion'].value, 
      Activo: this.formGrupos.controls['Activo'].value,
      Foto: "/utilerias/img/user/WorkTeam.jpg"
    }
    console.log(grupo)
    this.service.addGrupos(grupo)
    .subscribe( data => {
      console.log(data)
      this.iniciarForm();
      this.getGrupos();
    });
  }

  updateFoto()
  {
    this.name = this.name + '.' + this.someInput.selectedFile.type.split('/')[1];

    this.service.UploadImg(this.someInput.selectedFile, this.name)
      .subscribe( data => {
        console.log(data)

        if(data.ok)
        {
          this.Grupos[this.rowAux]['foto'] = ApiConection.ServiceUrl + 'utilerias/img/user/' +  this.someInput.name;
          this.Grupos = [...this.Grupos];
          this.someInput.removeItem();
          this.someInput.selectedFile = null;

          this.modal.hide();
        }

    }); 
  }

  updateGrupo($event,rowIndex)
  {
    let gu = this.Grupos[rowIndex]
    console.log(gu)
    this.service.UpdateGrupo(gu)
      .subscribe( data => {
        console.log(data)
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
        console.log(data)
        this.iniciarForm();
        this.Grupos.splice(rowIndex, 1);
        this.Grupos = [...this.Grupos];
    });
    alert("los datos se borraron")
  }

  ngOnInit() {
    this.getGrupos();
  }


}
