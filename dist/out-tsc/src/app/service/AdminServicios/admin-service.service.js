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
var AdminServiceService = (function () {
    function AdminServiceService(http) {
        this.http = http;
        // Url de servicios.
        this.Url = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getDtosPersonal;
        this.UrlTiposUsuarios = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getTiposUsuarios;
        this.UrlAddRol = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.addRol;
        this.UrlAddGrupo = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.addGrupo;
        this.UrlAddUserGroup = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.addUserGroup;
        this.UrlGetDepas = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getDepartamentos;
        this.UrlAddUser = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.addUser;
        this.UrlUdActivo = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.udActivoUser;
        this.UrlGetByDepa = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getUsuariosByDepa;
        this.UrlGetGrupos = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetGrupos;
        this.UrlGetGruposRoles = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.getGruposRoles;
        this.UrlGetRoles = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.GetRoles;
        this.UrlAddPrivilegio = api_conection_service_1.ApiConection.ServiceUrl + api_conection_service_1.ApiConection.addPrivilegio;
    }
    // Error.
    AdminServiceService.prototype.handleError = function (error) {
        console.log('sever error:', error);
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    AdminServiceService.prototype.getPersonas = function () {
        return this.http.get(this.Url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.getDepas = function () {
        return this.http.get(this.UrlGetDepas)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.getTipos = function () {
        return this.http.get(this.UrlTiposUsuarios)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.getGrupos = function () {
        return this.http.get(this.UrlGetGrupos)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.getGruposRoles = function () {
        return this.http.get(this.UrlGetGruposRoles)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.getRoles = function () {
        return this.http.get(this.UrlGetRoles)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.GetUsuariosByDepa = function (id) {
        return this.http.get(this.UrlGetByDepa + '?id=' + id)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.addGrupos = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlAddGrupo, JSON.stringify(data), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.addUserGroup = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlAddUserGroup, JSON.stringify(data), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.AddRoles = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlAddRol, JSON.stringify(data), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.AddUsers = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlAddUser, JSON.stringify(data), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.AddPrivilegios = function (data) {
        debugger;
        console.log(data);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.UrlAddPrivilegio, JSON.stringify(data), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService.prototype.UDActivoUsers = function (id, v) {
        return this.http.get(this.UrlUdActivo + '?id=' + id + '&v=' + v)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    AdminServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AdminServiceService);
    return AdminServiceService;
}());
exports.AdminServiceService = AdminServiceService;
//# sourceMappingURL=admin-service.service.js.map