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
var admin_service_service_1 = require("../../../service/AdminServicios/admin-service.service");
var forms_1 = require("@angular/forms");
var AddGrupoComponent = (function () {
    function AddGrupoComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.Grupos = [];
        this.iniciarForm();
        this.msj = '';
    }
    AddGrupoComponent.prototype.iniciarForm = function () {
        this.formGrupos = this.fb.group({
            Nombre: ['', [forms_1.Validators.required]],
            Descripcion: "",
            Activo: 1
        });
    };
    AddGrupoComponent.prototype.getGrupos = function () {
        var _this = this;
        this.service.getGrupos()
            .subscribe(function (e) {
            _this.Grupos = e;
            console.log(_this.Grupos);
        });
    };
    AddGrupoComponent.prototype.saveData = function () {
        var _this = this;
        this.service.addGrupos(this.formGrupos.value)
            .subscribe(function (data) {
            _this.msj = data;
            _this.iniciarForm();
            _this.getGrupos();
        });
    };
    AddGrupoComponent.prototype.ngOnInit = function () {
        this.getGrupos();
    };
    AddGrupoComponent = __decorate([
        core_1.Component({
            selector: 'app-add-grupo',
            templateUrl: './add-grupo.component.html',
            styleUrls: ['./add-grupo.component.scss'],
            providers: [admin_service_service_1.AdminServiceService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, admin_service_service_1.AdminServiceService])
    ], AddGrupoComponent);
    return AddGrupoComponent;
}());
exports.AddGrupoComponent = AddGrupoComponent;
//# sourceMappingURL=add-grupo.component.js.map