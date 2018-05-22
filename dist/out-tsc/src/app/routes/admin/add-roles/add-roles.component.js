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
var forms_1 = require("@angular/forms");
var admin_service_service_1 = require("../../../service/AdminServicios/admin-service.service");
var AddRolesComponent = (function () {
    function AddRolesComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.Roles = [];
        this.iniciarForm();
        this.msj = '';
    }
    AddRolesComponent.prototype.iniciarForm = function () {
        this.formRoles = this.fb.group({
            Rol: ['', [forms_1.Validators.required]],
            Create: 0,
            Read: 1,
            Update: 0,
            Delete: 0,
            Especial: 0,
            Activo: 1
        });
    };
    AddRolesComponent.prototype.saveData = function () {
        var _this = this;
        this.service.AddRoles(this.formRoles.value)
            .subscribe(function (data) {
            _this.msj = data;
            _this.iniciarForm();
        });
    };
    AddRolesComponent.prototype.getRoles = function () {
        var _this = this;
        this.service.getRoles()
            .subscribe(function (e) {
            _this.Roles = e;
            console.log(_this.Roles);
        });
    };
    AddRolesComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    AddRolesComponent = __decorate([
        core_1.Component({
            selector: 'app-add-roles',
            templateUrl: './add-roles.component.html',
            styleUrls: ['./add-roles.component.scss'],
            providers: [admin_service_service_1.AdminServiceService]
        }),
        __metadata("design:paramtypes", [admin_service_service_1.AdminServiceService,
            forms_1.FormBuilder])
    ], AddRolesComponent);
    return AddRolesComponent;
}());
exports.AddRolesComponent = AddRolesComponent;
//# sourceMappingURL=add-roles.component.js.map