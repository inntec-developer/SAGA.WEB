import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';


@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss'],
  providers:[ AdminServiceService ]

})
export class AddPersonaComponent implements OnInit {

  public formUsuarios: FormGroup;
  public ListDepas: Array<any> = [];
  public email: Array<any>=[];
  // DepasControl = new formControl('', [Validators.required]);
  msj: string;
 selectedValue: string;
  constructor(private service: AdminServiceService ,public fb: FormBuilder)
  {
  }


  saveData(){


    this.email.push({email: this.formUsuarios.controls['Email'].value, UsuarioAlta: 'INNTEC'});
    let persona = {
        Clave: this.formUsuarios.controls['Clave'].value,
        Nombre: this.formUsuarios.controls['Nombre'].value,
        ApellidoPaterno: this.formUsuarios.controls['ApellidoPaterno'].value,
        ApellidoMaterno: this.formUsuarios.controls['ApellidoMaterno'].value,
        Usuario: this.formUsuarios.controls['Usuario'].value,
        DepartamentoId: this.formUsuarios.controls['DepartamentoId'].value,
        Email: this.email

    };
    console.log(persona);
    // this.formUsuarios.controls['Email'] = this.email;
    // alert(JSON.stringify(this.formUsuarios.value))
    this.service.AddUsers(persona)
    .subscribe( data => {
      this.msj = data;
    });

  }

  getDepartamentos()
  {
    this.service.getDepas()
    .subscribe(
      e=>{
        this.ListDepas = e;
      })
  }

  ngOnInit() {
    this.getDepartamentos();
        this.formUsuarios = this.fb.group({
          DepartamentoId : [ '', [Validators.required]],
          Clave: ['', [Validators.required]],
          Nombre: ['', [Validators.required]],
          ApellidoPaterno: ['', [Validators.required]],
          ApellidoMaterno: ['', [Validators.required]],
          Email: '',
          Usuario: 'Damsa'

          });
  }

}
