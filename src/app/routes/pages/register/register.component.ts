import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers:[ AdminServiceService ]
})
export class RegisterComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;
    email: Array<any>=[];
    msj: string = '';
    ListDepas: Array<any> = [];
    user: string = '';

    constructor(public settings: SettingsService,
                fb: FormBuilder,
                private service: AdminServiceService )
    {
        let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        let certainPassword = new FormControl('', CustomValidators.equalTo(password));

        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'accountagreed': [null, Validators.required],
            'passwordGroup': this.passwordForm,
            'Clave': ['',  [Validators.required]],
            'Nombre': ['',  [Validators.required]],
            'ApellidoPaterno': ['',  [Validators.required]],
            'ApellidoMaterno': ['',  [Validators.required]],
            'Usuario': '',
            'DepartamentoId': ['',  [Validators.required]]
        });

    }

    submitForm($ev, value: any)
    {
        $ev.preventDefault();

        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (let c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }

        if (this.valForm.valid)
        {
           this.user = ((this.valForm.controls['Usuario'].value == "") ? "DAMSA." + this.valForm.controls['Nombre'].value : this.valForm.controls['Usuario'].value);

           this.email.push({email: this.valForm.controls['email'].value, UsuarioAlta: 'INNTEC'});
           let persona = {
                Clave: this.valForm.controls['Clave'].value,
                Nombre: this.valForm.controls['Nombre'].value,
                ApellidoPaterno: this.valForm.controls['ApellidoPaterno'].value,
                ApellidoMaterno: this.valForm.controls['ApellidoMaterno'].value,
                Usuario: this.user,
                DepartamentoId: this.valForm.controls['DepartamentoId'].value,
                Email: this.email,
                Password: this.passwordForm.controls['password'].value
              };

           this.service.AddUsers(persona)
               .subscribe( data => {
               this.msj = data;
               });
        }
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
    }

}
