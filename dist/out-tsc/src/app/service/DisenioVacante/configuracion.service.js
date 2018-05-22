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
// console.log('hola mundo')
var ConfiguracionService = (function () {
    function ConfiguracionService(http) {
        this.http = http;
        // Url de servicios.
        this.UrlResumen = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.setResumen;
        this.UrlDetalle = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.setDetalle;
        this.UrlPublicar = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.updatePublicar;
    }
    // Error.
    ConfiguracionService.prototype.handleError = function (error) {
        console.log('sever error:', error);
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    ConfiguracionService.prototype.SetDetalle = function (RequiID, Idcampo, detalle) {
        return this.http.get(this.UrlDetalle + '?Requi=' + RequiID + '&Idcampo=' + Idcampo + '&detalle=' + detalle)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    ConfiguracionService.prototype.SetResumen = function (RequiID, Idcampo, detalle) {
        return this.http.get(this.UrlResumen + '?Requi=' + RequiID + '&Idcampo=' + Idcampo + '&resumen=' + detalle)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    // UpdatePublicar2(RequiID:string, lista:any[]): Observable<any> {
    //    return this.http.post(this.UrlPublicar + '?Requi='+RequiID+'&ListadoJson='+lista)
    //        .map(result => result.json())
    //        .catch(this.handleError);
    // }
    ConfiguracionService.prototype.UpdatePublicar = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlPublicar, JSON.stringify(data), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    ConfiguracionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ConfiguracionService);
    return ConfiguracionService;
}());
exports.ConfiguracionService = ConfiguracionService;
//# sourceMappingURL=configuracion.service.js.map