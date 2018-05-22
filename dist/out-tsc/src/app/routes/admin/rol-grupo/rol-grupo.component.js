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
var RolGrupoComponent = (function () {
    function RolGrupoComponent(service) {
        this.service = service;
        this.Grupos = [];
        this.Roles = [];
        this.ListaRG = [];
        this.permisoRol = [];
        this.msj = "";
    }
    RolGrupoComponent.prototype.addToRol = function ($event) {
        console.log($event.dragData);
        this.ListaRG.push($event.dragData);
    };
    RolGrupoComponent.prototype.resetBasket = function () {
        this.ListaRG = [];
        this.getGrupos();
    };
    RolGrupoComponent.prototype.popGrupo = function (p, i) {
        console.log(i);
        this.Grupos.splice(i, 1);
    };
    RolGrupoComponent.prototype.saveData = function (RolId) {
        var _this = this;
        debugger;
        console.log(RolId);
        var lrg = [];
        for (var _i = 0, _a = this.ListaRG; _i < _a.length; _i++) {
            var rg = _a[_i];
            var element_1 = {
                EntidadId: rg.id,
                RolId: RolId,
                Tipo: 2
            };
            lrg.push(element_1);
        }
        this.service.AddPrivilegios(lrg)
            .subscribe(function (data) {
            _this.msj = data;
            console.log(_this.msj);
        });
        lrg = [];
        this.ListaRG = [];
        this.getGrupos();
    };
    RolGrupoComponent.prototype.selected = function ($event, rol) {
        var id = $event.target.value;
        console.log(id);
        this.permisoRol = this.Roles.filter(function (item) { return item.id == id; });
    };
    RolGrupoComponent.prototype.getGrupos = function () {
        var _this = this;
        this.service.getGruposRoles()
            .subscribe(function (e) {
            _this.Grupos = e;
            console.log(_this.Grupos);
        });
    };
    RolGrupoComponent.prototype.getRoles = function () {
        var _this = this;
        this.service.getRoles()
            .subscribe(function (e) {
            _this.Roles = e;
            console.log(_this.Roles);
        });
    };
    RolGrupoComponent.prototype.ngOnInit = function () {
        this.getGrupos();
        this.getRoles();
    };
    RolGrupoComponent = __decorate([
        core_1.Component({
            selector: 'app-rol-grupo',
            templateUrl: './rol-grupo.component.html',
            styleUrls: ['./rol-grupo.component.scss'],
            providers: [admin_service_service_1.AdminServiceService]
        }),
        __metadata("design:paramtypes", [admin_service_service_1.AdminServiceService])
    ], RolGrupoComponent);
    return RolGrupoComponent;
}());
exports.RolGrupoComponent = RolGrupoComponent;
//# sourceMappingURL=rol-grupo.component.js.map