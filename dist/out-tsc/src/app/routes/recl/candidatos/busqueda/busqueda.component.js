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
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
// Modelos
var candidatos_1 = require("../../../../models/recl/candidatos");
// Servicios
var index_1 = require("../../../../service/index");
var BusquedaComponent = (function () {
    function BusquedaComponent(iconRegistry, sanitizer, service) {
        this.service = service;
        // Decorador para envio de busqueda a tabla de candidatos.
        this.filtro = new core_1.EventEmitter();
        iconRegistry.addSvgIcon('find', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/ic_find_in_page_24px.svg'));
    }
    BusquedaComponent.prototype.ngOnInit = function () { };
    BusquedaComponent.prototype.FiltroPais = function (event) {
        this.IdPais = event;
    };
    BusquedaComponent.prototype.FiltroEstado = function (event) {
        this.IdEstado = event;
    };
    BusquedaComponent.prototype.FiltroMunicipio = function (event) {
        this.IdMunicipio = event;
    };
    BusquedaComponent.prototype.FiltroColonia = function (event) {
        this.IdColonia = event;
    };
    BusquedaComponent.prototype.FiltroCp = function (event) {
        this.IdCp = event;
    };
    BusquedaComponent.prototype.Filtroareaexp = function (event) {
        this.Idexp = event;
    };
    BusquedaComponent.prototype.Filtroperfil = function (event) {
        this.IdPerfil = event;
    };
    BusquedaComponent.prototype.FiltroGenero = function (event) {
        this.IdGenero = event;
    };
    BusquedaComponent.prototype.FiltroPd = function (event) {
        this.IdPd = event;
    };
    BusquedaComponent.prototype.FiltroTpLic = function (event) {
        this.IdTpLic = event;
    };
    BusquedaComponent.prototype.FiltroNv = function (event) {
        this.IdNv = event;
    };
    BusquedaComponent.prototype.FiltroIdioma = function (event) {
        this.IdIdioma = event;
    };
    BusquedaComponent.prototype.FiltroSalario = function (salario) {
        this.Salario = salario;
    };
    BusquedaComponent.prototype.FiltroEdad = function (event) {
        this.Edad = event;
    };
    BusquedaComponent.prototype.FiltroRe = function (event) {
        this.Reubicacion = event;
    };
    BusquedaComponent.prototype.FiltroVh = function (event) {
        this.TpVehiculo = event;
    };
    // Busqueda de candidatos segun filtros de busqueda.
    BusquedaComponent.prototype.Buscar = function () {
        var _this = this;
        var filtroX = new candidatos_1.Filtros();
        filtroX.IdPais = this.IdPais;
        filtroX.IdEstado = this.IdEstado;
        filtroX.IdMunicipio = this.IdMunicipio;
        filtroX.Cp = this.IdCp;
        filtroX.IdAreaExp = this.Idexp;
        filtroX.IdPerfil = this.IdPerfil;
        filtroX.IdGenero = this.IdGenero;
        filtroX.IdPDiscapacidad = this.IdPd;
        filtroX.IdNvEstudios = this.IdNv;
        filtroX.IdIdiomas = this.IdIdioma;
        filtroX.Salario = this.Salario;
        filtroX.Edad = this.Edad;
        filtroX.Reubica = this.Reubicacion;
        filtroX.TpVehiculo = this.TpVehiculo;
        // filtroX.palabraClave = this.FiltroVacantes.get('palabraClave').value;
        this.service.getcandidatos(filtroX)
            .subscribe(function (data) {
            _this.Candidatos = data;
            _this.filtro.emit(_this.Candidatos); // Envio de filtro a tabla de candidatos.
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], BusquedaComponent.prototype, "filtro", void 0);
    BusquedaComponent = __decorate([
        core_1.Component({
            selector: 'app-busqueda',
            templateUrl: './busqueda.component.html',
            styleUrls: ['./busqueda.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [material_1.MatIconRegistry, platform_browser_1.DomSanitizer, index_1.CandidatosService])
    ], BusquedaComponent);
    return BusquedaComponent;
}());
exports.BusquedaComponent = BusquedaComponent;
//# sourceMappingURL=busqueda.component.js.map