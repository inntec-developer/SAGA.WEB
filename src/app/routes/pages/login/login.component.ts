import {ActivatedRoute, Router} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import { AuthService } from './../../../service/auth/auth.service';
import { CustomValidators } from 'ng2-validation';
import { SettingsService } from '../../../core/settings/settings.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[ AdminServiceService, AuthService ]
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    IdUser;
    loading = false;
    returnUrl: string;

    constructor(
        private service: AdminServiceService, 
        public settings: SettingsService, 
        fb: FormBuilder, 
        private route: ActivatedRoute, 
        private router: Router, 
        private authenticationService: AuthService) {

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
            this.login(value.email, value.password)
            console.log("mocos")
            console.log(this.settings.user)
            this.router.navigate(['/home']);
        }
    }

    GetSession(email, p)
    {
        this.service.GetSession(email, p)
        .subscribe(
            e=>{
              console.log(e)
                this.IdUser = e;
                this.GetPrivilegios();
              
            }
        )
    }

    public GetPrivilegios()
    {
      this.service.GetPrivilegios(this.IdUser)
      .subscribe(
        e=>{
            localStorage.setItem('privilegios', JSON.stringify(e));
        })
    }

    login(email: string, password: string) {
        this.loading = true;
        this.authenticationService.login(email, password)
            .subscribe(
                data => {
                    localStorage.setItem('usuario',data[0].usuario);
                    localStorage.setItem('nombre', data[0].nombre);
                    localStorage.setItem('email', email);
                    localStorage.setItem('id', data[0].id)
                    this.IdUser = data[0].id;
                    this.GetPrivilegios();
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });
    }


    ngOnInit() {
       // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

}
