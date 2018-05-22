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
var CatalogoRequi_service_1 = require("../../../service/DisenioVacante/CatalogoRequi.service");
var _1 = require("@angular/router/");
var http_1 = require("@angular/http");
//Element  Angular Material
var material_1 = require("@angular/material");
var VacantesComponent = (function () {
    function VacantesComponent(service, http, route, router) {
        this.service = service;
        this.http = http;
        this.route = route;
        this.router = router;
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'vBtra',
            'experiencia',
            'nombre',
            'actividad',
            'claseReclutamiento',
            'accion',
        ];
    }
    VacantesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRequis()
            .subscribe(function (e) {
            _this.datos = e;
            _this.dataSource = new material_1.MatTableDataSource(e);
        });
    };
    // Filtro dentro del Grid
    VacantesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    VacantesComponent.prototype.Onclick = function (id) {
        this.router.navigate(['/reclutamiento/disenador'], { queryParams: { Requi: id } });
        //  this.router.navigate(['/reclutamiento/configuracionVacante',id],{skipLocationChange:true});
        //this.router.navigate(['/systems'], { queryParams: { x: x } });
        //window.location.href = '/reclutamiento/disenador';
    };
    VacantesComponent.prototype.IrHome = function () {
        this.router.navigate(['/home']);
    };
    VacantesComponent = __decorate([
        core_1.Component({
            selector: 'app-vacantes',
            templateUrl: './vacantes.component.html',
            styleUrls: ['./vacantes.component.scss'],
            providers: [CatalogoRequi_service_1.Requis]
        }),
        __metadata("design:paramtypes", [CatalogoRequi_service_1.Requis,
            http_1.Http,
            _1.ActivatedRoute,
            _1.Router])
    ], VacantesComponent);
    return VacantesComponent;
}());
exports.VacantesComponent = VacantesComponent;
//# sourceMappingURL=vacantes.component.js.map