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
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
// Servicios
var index_1 = require("../../../../../service/index");
var PerfilComponent = (function () {
    function PerfilComponent(service) {
        this.service = service;
        this.change = new core_1.EventEmitter();
        this.perfilCtrl = new forms_1.FormControl();
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getperfiles()
            .subscribe(function (data) {
            _this.Perfiles = data;
            _this.filteredperfil = _this.perfilCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (perfil) { return perfil ? _this.filterperfil(perfil) : _this.Perfiles.slice(); }));
        });
    };
    PerfilComponent.prototype.filterperfil = function (perfil) {
        return this.filtroperfil = this.Perfiles.filter(function (perfilexp) {
            return perfilexp.perfilExperiencia.toLowerCase().indexOf(perfil.toLowerCase()) === 0;
        });
    };
    PerfilComponent.prototype.SendIdPerfil = function () {
        var _this = this;
        this.filteredperfil = this.perfilCtrl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (perfil) { return perfil ? _this.filterperfil(perfil) : _this.Perfiles.slice(); }));
        if (this.filtroperfil != null) {
            this.IdPerfil = this.filtroperfil[0].id;
            this.change.emit(this.IdPerfil);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PerfilComponent.prototype, "change", void 0);
    PerfilComponent = __decorate([
        core_1.Component({
            selector: 'app-perfil',
            templateUrl: './perfil.component.html',
            styleUrls: ['./perfil.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=perfil.component.js.map