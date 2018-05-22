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
var AddPersonaComponent = (function () {
    function AddPersonaComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.Users = [];
        this.msj = '';
    }
    AddPersonaComponent.prototype.Actualizar = function ($ev, id) {
        var _this = this;
        this.service.UDActivoUsers(id, $ev.target.checked)
            .subscribe(function (data) {
            _this.msj = data;
            _this.getUsuarios();
        });
    };
    AddPersonaComponent.prototype.getUsuarios = function () {
        var _this = this;
        this.service.getPersonas()
            .subscribe(function (e) {
            _this.Users = e;
        });
    };
    AddPersonaComponent.prototype.ngOnInit = function () {
        this.getUsuarios();
    };
    AddPersonaComponent = __decorate([
        core_1.Component({
            selector: 'app-add-persona',
            templateUrl: './add-persona.component.html',
            styleUrls: ['./add-persona.component.scss'],
            providers: [admin_service_service_1.AdminServiceService]
        }),
        __metadata("design:paramtypes", [admin_service_service_1.AdminServiceService, forms_1.FormBuilder])
    ], AddPersonaComponent);
    return AddPersonaComponent;
}());
exports.AddPersonaComponent = AddPersonaComponent;
//# sourceMappingURL=add-persona.component.js.map