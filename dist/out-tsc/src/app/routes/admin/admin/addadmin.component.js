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
var AddadminComponent = (function () {
    function AddadminComponent(service) {
        this.service = service;
        this.ListaPersonas = [];
        this.ListaPG = [];
        this.ListDepas = [];
        this.listGrupos = [];
        this.IdGrupo = null;
    }
    AddadminComponent.prototype.addToGroups = function ($event) {
        this.ListaPG.push($event.dragData);
    };
    AddadminComponent.prototype.resetBasket = function () {
        this.ListaPG = [];
        this.addPersonas();
    };
    AddadminComponent.prototype.popPerson = function (p, i) {
        console.log(i);
        this.ListaPersonas.splice(i, 1);
    };
    AddadminComponent.prototype.filtrar = function ($event) {
        var _this = this;
        console.log($event.target.value);
        this.service.GetUsuariosByDepa($event.target.value)
            .subscribe(function (e) {
            _this.ListaPersonas = [];
            _this.ListaPersonas = e;
        });
    };
    AddadminComponent.prototype.selected = function ($event) {
        this.IdGrupo = $event.target.value;
    };
    AddadminComponent.prototype.ngOnInit = function () {
        this.addPersonas();
        this.GetGrupos();
        this.getDepartamentos();
    };
    AddadminComponent.prototype.addUsuarioGrupo = function () {
        var lug = [];
        for (var _i = 0, _a = this.ListaPG; _i < _a.length; _i++) {
            var ug = _a[_i];
            lug.push({ UsuarioId: ug.id, GrupoId: this.IdGrupo });
        }
        console.log(lug);
        this.service.addUserGroup(lug)
            .subscribe(function (data) {
            console.log(data);
        });
        lug = [];
        this.resetBasket();
    };
    AddadminComponent.prototype.addPersonas = function () {
        var _this = this;
        this.service.getPersonas()
            .subscribe(function (e) {
            _this.ListaPersonas = e;
            console.log(_this.ListaPersonas);
        });
    };
    AddadminComponent.prototype.GetGrupos = function () {
        var _this = this;
        this.service.getGrupos()
            .subscribe(function (e) {
            _this.listGrupos = e;
            console.log(e);
        });
    };
    AddadminComponent.prototype.getDepartamentos = function () {
        var _this = this;
        this.service.getDepas()
            .subscribe(function (e) {
            _this.ListDepas = e;
        });
    };
    AddadminComponent = __decorate([
        core_1.Component({
            selector: 'app-addadmin',
            templateUrl: './addadmin.component.html',
            styleUrls: ['./addadmin.component.scss'],
            providers: [admin_service_service_1.AdminServiceService]
        }),
        __metadata("design:paramtypes", [admin_service_service_1.AdminServiceService])
    ], AddadminComponent);
    return AddadminComponent;
}());
exports.AddadminComponent = AddadminComponent;
//# sourceMappingURL=addadmin.component.js.map