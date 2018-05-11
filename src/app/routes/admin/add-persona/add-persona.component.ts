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

  formUsuarios: FormGroup;
  public ListDepas: Array<any> = [];
  DepasControl = new FormControl('', [Validators.required]);

 selectedValue: string;
  constructor(private service: AdminServiceService ,public fb: FormBuilder)
  {

    this.formUsuarios = this.fb.group({
    Clave: ['', [Validators.required]],
    Nombre: ['', [Validators.required]],
    ApellidoPaterno: ['', [Validators.required]],
    ApellidoMaterno: ['', [Validators.required]],
    Email: '',
    Usuario: 'Damsa'

    // Create:0,
    // Read:1,
    // Update:0,
    // Delete:0,
    // Especial:0;
  });

  }


  getDepartamentos()
  {
    this.service.getDepas()
    .subscribe(
      e=>{
        this.ListDepas = e;
        console.log(e)
      })
  }

  ngOnInit() {
    this.getDepartamentos();
  }

}
