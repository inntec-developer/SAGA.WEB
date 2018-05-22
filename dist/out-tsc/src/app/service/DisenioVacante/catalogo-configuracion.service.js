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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/toPromise");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
var api_conection_service_1 = require("../api-conection.service");
var CatalogoConfiguracionService = (function () {
    function CatalogoConfiguracionService(http) {
        this.http = http;
        // Url de servicios.
        this.UrlGeneral = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getGeneral;
        this.UrlContrato = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getContrato;
        this.UrlPuestoReclutar = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getPuestoReclutar;
        this.UrlHorario = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getHorario;
        this.Urlsueldo = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getsueldo;
        this.UrlOtros = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getOtros;
        this.UrlActividad = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getActividad;
        this.UrlBeneficio = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getBeneficio;
        this.UrlDireccion = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getDireccion;
        this.UrlTelefono = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getTelefono;
        this.UrlContacto = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getContacto;
        this.UrlPsicometria = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getPsicometria;
        this.UrlDocumento = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getDocumento;
        this.UrlProceso = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getProceso;
        this.UrlCopetencia = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getCopetencia;
        this.UrlUbicacion = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getUbicacion;
        this.UrlgetCampos = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getCampos;
    }
    // Error.
    CatalogoConfiguracionService.prototype.handleError = function (error) {
        console.log('sever error:', error);
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    CatalogoConfiguracionService.prototype.getGeneral = function (RequiID) {
        return this.http.get(this.UrlGeneral + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getContrato = function (RequiID) {
        return this.http.get(this.UrlContrato + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getPuestoReclutar = function (RequiID) {
        return this.http.get(this.UrlPuestoReclutar + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getHorario = function (RequiID) {
        return this.http.get(this.UrlHorario + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getsueldo = function (RequiID) {
        return this.http.get(this.Urlsueldo + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getOtros = function (RequiID) {
        return this.http.get(this.UrlOtros + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getActividad = function (RequiID) {
        return this.http.get(this.UrlActividad + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getDireccion = function (RequiID) {
        return this.http.get(this.UrlDireccion + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getTelefono = function (RequiID) {
        return this.http.get(this.UrlTelefono + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getBeneficio = function (RequiID) {
        return this.http.get(this.UrlBeneficio + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getContacto = function (RequiID) {
        return this.http.get(this.UrlContacto + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getPsicometria = function (RequiID) {
        return this.http.get(this.UrlPsicometria + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getDocumento = function (RequiID) {
        return this.http.get(this.UrlDocumento + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getProceso = function (RequiID) {
        return this.http.get(this.UrlProceso + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getCopetencia = function (RequiID) {
        return this.http.get(this.UrlCopetencia + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getUbicacion = function (RequiID) {
        return this.http.get(this.UrlUbicacion + '?Requi=' + RequiID)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService.prototype.getCampos = function () {
        return this.http.get(this.UrlgetCampos)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogoConfiguracionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CatalogoConfiguracionService);
    return CatalogoConfiguracionService;
}());
exports.CatalogoConfiguracionService = CatalogoConfiguracionService;
//# sourceMappingURL=catalogo-configuracion.service.js.map