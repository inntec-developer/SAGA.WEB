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
var CandidatosService = (function () {
    function CandidatosService(http) {
        this.http = http;
        // Url de servicios.
        this.UrlPaises = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.filtropaises;
        this.UrlEstados = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.filtroestados;
        this.UrlMunicipios = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.filtromunicipios;
        this.UrlColonias = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.filtrocolonias;
        this.UrlCandidatos = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Candidatos;
        this.UrlCandidatoDtl = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Candidatodetail;
        this.UrlPostulaciones = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Postulaciones;
        this.UrlAreaExp = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Areasexp;
        this.UrlPerfiles = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Perfiles;
        this.UrlGeneros = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Generos;
        this.UrlDiscapacidad = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Discapacidad;
        this.UrlTpLicencia = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.TpLicencia;
        this.UrlNivelEstudios = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.NivelEstudio;
        this.UrlIdiomas = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Idiomas;
        this.UrlVacantes = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Vacantes;
        this.UrlApartar = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Apartar;
        this.UrlGetEstatus = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetEstatus;
        this.UrlLiberar = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Liberar;
    }
    // Error.
    CandidatosService.prototype.handleError = function (error) {
        console.log('sever error:', error);
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    // Servicios de controller de candidatos.
    CandidatosService.prototype.getpaises = function () {
        return this.http.get(this.UrlPaises)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getestados = function (pais) {
        return this.http.get(this.UrlEstados + '?Pais=' + pais)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getmunicipios = function (estado) {
        return this.http.get(this.UrlMunicipios + '?Estado=' + estado)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getcolonias = function (municipio) {
        return this.http.get(this.UrlColonias + '?Municipio=' + municipio)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getareasexp = function () {
        return this.http.get(this.UrlAreaExp)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getperfiles = function () {
        return this.http.get(this.UrlPerfiles)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getgeneros = function () {
        return this.http.get(this.UrlGeneros)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getdiscapacidad = function () {
        return this.http.get(this.UrlDiscapacidad)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.gettplicencia = function () {
        return this.http.get(this.UrlTpLicencia)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getnivelestudio = function () {
        return this.http.get(this.UrlNivelEstudios)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getidiomas = function () {
        return this.http.get(this.UrlIdiomas)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getcandidatos = function (filtrox) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlCandidatos, JSON.stringify(filtrox), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
        // return this.http.get(this.UrlCandidatos)
        //     .map(result => result.json())
        //     .catch(this.handleError);
    };
    CandidatosService.prototype.getcandidatodtl = function (Id) {
        return this.http.get(this.UrlCandidatoDtl + '?Id=' + Id)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getpostulaciones = function (Id) {
        return this.http.get(this.UrlPostulaciones + '?IdCandidato=' + Id)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getvacantes = function () {
        return this.http.get(this.UrlVacantes)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.postApartar = function (candidato) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlApartar, JSON.stringify(candidato), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService.prototype.getEstatusCandidato = function (Id) {
        return this.http.get(this.UrlGetEstatus + '?Id=' + Id)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    // postLiberar(candidato: any): Observable<any> { // Eliminar el candidato por liberación.
    //   let headers = new Headers({ 'Content-Type': 'application/json' });
    //   let options = new RequestOptions({ headers: headers });
    //   return this.http.post(this.UrlLiberar, JSON.stringify(candidato), options)
    //     .map(result => result.json())
    //     .catch(this.handleError);
    // }
    CandidatosService.prototype.Liberar = function (candidato) {
        return this.http.get(this.UrlLiberar + '?Id=' + candidato)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    CandidatosService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CandidatosService);
    return CandidatosService;
}());
exports.CandidatosService = CandidatosService;
//# sourceMappingURL=candidatos.service.js.map