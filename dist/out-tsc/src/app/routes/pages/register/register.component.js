"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_service_1 = require("../../../core/settings/settings.service");
var forms_1 = require("@angular/forms");
var ng2_validation_1 = require("ng2-validation");
var admin_service_service_1 = require("../../../service/AdminServicios/admin-service.service");
var RegisterComponent = (function () {
    function RegisterComponent(settings, fb, service) {
        this.settings = settings;
        this.service = service;
        this.email = [];
        this.msj = '';
        this.ListDepas = [];
        this.user = '';
        var password = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        var certainPassword = new forms_1.FormControl('', ng2_validation_1.CustomValidators.equalTo(password));
        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });
        this.valForm = fb.group({
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.email])],
            'accountagreed': [null, forms_1.Validators.required],
            'passwordGroup': this.passwordForm,
            'Clave': ['', [forms_1.Validators.required]],
            'Nombre': ['', [forms_1.Validators.required]],
            'ApellidoPaterno': ['', [forms_1.Validators.required]],
            'ApellidoMaterno': ['', [forms_1.Validators.required]],
            'Usuario': '',
            'DepartamentoId': ['', [forms_1.Validators.required]]
        });
    }
    RegisterComponent.prototype.submitForm = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (var c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this.user = ((this.valForm.controls['Usuario'].value == "") ? "DAMSA." + this.valForm.controls['Nombre'].value : this.valForm.controls['Usuario'].value);
            this.email.push({ email: this.valForm.controls['email'].value, UsuarioAlta: 'INNTEC' });
            var persona = {
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
                .subscribe(function (data) {
                _this.msj = data;
            });
        }
    };
    RegisterComponent.prototype.getDepartamentos = function () {
        var _this = this;
        this.service.getDepas()
            .subscribe(function (e) {
            _this.ListDepas = e;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.getDepartamentos();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss'],
            providers: [admin_service_service_1.AdminServiceService]
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService,
            forms_1.FormBuilder,
            admin_service_service_1.AdminServiceService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map