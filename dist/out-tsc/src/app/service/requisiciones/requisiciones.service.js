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
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/toPromise");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
var http_1 = require("@angular/http");
var api_conection_service_1 = require("../api-conection.service");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
//API Conection
//MODELS
var RequisicionesService = (function () {
    function RequisicionesService(http) {
        this.http = http;
        this.urlGetViewDamfos = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetViewDamfos;
        this.urlAddress = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.AddressCliente;
        this.urlCreateRequi = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.CreateRequi;
        this.urlGetRequisicionById = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetRequisicionById;
        this.urlGetRequisicionByFolio = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetRequisicionByFolio;
        this.urlGetDamfoById = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.Damfo290GetById;
        this.urlGetRequisicionesAll = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetRequisicionesAll;
        this.urlUpdateRequisicion = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.UpdateRequisicion;
    }
    //Recupera todos los damfos que esten dados de alta y se encuentren activos
    RequisicionesService.prototype.getDamgo290 = function () {
        return this.http.get(this.urlGetViewDamfos)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    //REcupera las direcciones del cliente que se seleccione para generar Requisicion
    RequisicionesService.prototype.getAddress = function (damfoId) {
        return this.http.get(this.urlAddress + damfoId)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    // Generea una nueva requisicion y posteriormente regresa el ID de la nueva requisicion.
    RequisicionesService.prototype.createNewRequi = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.urlCreateRequi, JSON.stringify(data), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    // Recupera la informacion completa de la requisicion que se requiera
    RequisicionesService.prototype.getNewRequi = function (requisicionId) {
        return this.http.get(this.urlGetRequisicionById + requisicionId)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    RequisicionesService.prototype.getRequiFolio = function (folio) {
        return this.http.get(this.urlGetRequisicionByFolio + folio)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    //Recupera la información completa del DAMFO-290 que se requiera.
    RequisicionesService.prototype.getDamfoById = function (damfoId) {
        return this.http.get(this.urlGetDamfoById + damfoId)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    //Recupera la información de las requisiciones que se an generado.
    RequisicionesService.prototype.getRequisiciones = function () {
        return this.http.get(this.urlGetRequisicionesAll)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    RequisicionesService.prototype.updateRequisicion = function (requi) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.urlUpdateRequisicion, JSON.stringify(requi), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    //Muestra un error en consola y regresa el mismo al Frond-End en caso de que se genere el mismo.
    RequisicionesService.prototype.handleError = function (error) {
        console.log('Error Internar Server', error);
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'Back-End server error');
        }
        return Observable_1.Observable.throw(error || 'Back-End server error');
    };
    RequisicionesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RequisicionesService);
    return RequisicionesService;
}());
exports.RequisicionesService = RequisicionesService;
//# sourceMappingURL=requisiciones.service.js.map