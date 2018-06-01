import { UploadImgsComponent } from './../upload-imgs/upload-imgs.component';
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

  @ViewChild('uploadImg') someInput: UploadImgsComponent;

  formGrupos: FormGroup;
  msj: string;
  Grupos: Array<any> = [];
  editing = {};
  bandera: boolean = false;
  url: string = 'https://localhost:4200/assets/';
  fotoURL: string = 'assets/img/user/01.jpg';
  rowAux: any;

  constructor( public fb: FormBuilder, private service: AdminServiceService )
  {
    this.iniciarForm();
    this.msj = '';
  

  }
 
  CrearURL(idG: any)
  {
    this.url = this.url + 'id:' + idG;
    console.log(this.url)
  }
  iniciarForm()
  {
      this.formGrupos = this.fb.group({
      Nombre: ['', [Validators.required]],
      Descripcion: "",
      Activo: 1, 
      uploadImg: ''
 
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

  updateFoto()
  {
     console.log('entro')
    this.Grupos[this.rowAux]['foto'] = this.fotoURL;
   
    console.log(this.url)
    this.bandera = false;

  }

  updateGrupo($event,rowIndex)
  {
    
    let gu = this.Grupos[rowIndex]
  
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
      this.Grupos.splice(rowIndex, 1);
      this.Grupos = [...this.Grupos];
    });

    // 
    
 alert("los datos se borraron")

}

  ngOnInit() {
    this.getGrupos();
    
    
  }
 
  
}
