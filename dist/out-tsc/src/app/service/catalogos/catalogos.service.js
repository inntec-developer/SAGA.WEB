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
var CatalogosService = (function () {
    function CatalogosService(http) {
        this.http = http;
        this.urlGetDocumentosDamsa = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetDocumentosDamsa;
        this.urlGetPrestacionesLey = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetPrestacionesLey;
        this.UrlGetPrioridades = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetPrioridades;
        this.UrlGetEstatusRequi = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetEstatusRequi;
    }
    CatalogosService.prototype.getDocumentosDamsa = function () {
        return this.http.get(this.urlGetDocumentosDamsa)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogosService.prototype.getPrestacionesLey = function () {
        return this.http.get(this.urlGetPrestacionesLey)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogosService.prototype.getPrioridades = function () {
        return this.http.get(this.UrlGetPrioridades)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CatalogosService.prototype.getEstatusRequi = function (tipoMov) {
        return this.http.get(this.UrlGetEstatusRequi + tipoMov)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    /*********************TOMA EL ERROR ¡DEJAR ESTA SECCION DE CODIGO EN LA PARTE FINAL! *********************************************/
    //Muestra un error en consola y regresa el mismo al Frond-End en caso de que se genere el mismo.
    CatalogosService.prototype.handleError = function (error) {
        console.log('Error Internar Server', error);
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'Back-End server error');
        }
        return Observable_1.Observable.throw(error || 'Back-End server error');
    };
    CatalogosService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CatalogosService);
    return CatalogosService;
}());
exports.CatalogosService = CatalogosService;
//# sourceMappingURL=catalogos.service.js.map