import { AddPersonaComponent } from './../../admin/add-persona/add-persona.component';
import {Router} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[ AdminServiceService ]
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    IdUser;
    constructor(private service: AdminServiceService, public settings: SettingsService, fb: FormBuilder, private router: Router) {

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) 
        {
            this.GetSession(value.email, value.password)
            this.router.navigate(['/home']);
        }
    }

    GetSession(e, p)
    {
        this.service.GetSession(e, p)
        .subscribe(
            e=>{
              if( e != 0)
              {
                console.log(e.idUser)
                this.IdUser = e.idUser;
                this.GetPrivilegios();
              }
            }
        )
    }

    GetPrivilegios()
    {
      this.service.GetPrivilegios(this.IdUser)
      .subscribe(
        e=>{
          this.settings.user.privilegios = e;
          console.log(this.settings)
        })
    }

    ngOnInit() {

    }

}
