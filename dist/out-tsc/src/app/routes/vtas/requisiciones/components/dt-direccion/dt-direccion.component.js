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
var material_1 = require("@angular/material");
var DtDireccionComponent = (function () {
    function DtDireccionComponent() {
        this.getAddress = false;
        //*******************************-- GRID-- *********************************************//
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'tipoDireccion',
            'pais',
            'estado',
            'municipio',
            'colonia',
            'calle',
            'numeroExterior',
            'numeroInterior',
            'codigoPostal',
            'activo',
            'esPrincipal'
        ];
    }
    DtDireccionComponent.prototype.ngOnInit = function () {
    };
    DtDireccionComponent.prototype.ngAfterViewInit = function () {
    };
    DtDireccionComponent.prototype.ngAfterContentChecked = function () {
        if (this.Direcciones != null) {
            this.cargarDirecciones(this.Direcciones);
        }
    };
    DtDireccionComponent.prototype.cargarDirecciones = function (data) {
        if (!this.getAddress) {
            this.dataSource = new material_1.MatTableDataSource(data);
            this.getAddress = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DtDireccionComponent.prototype, "Direcciones", void 0);
    DtDireccionComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-direccion',
            templateUrl: './dt-direccion.component.html',
            styleUrls: ['./dt-direccion.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DtDireccionComponent);
    return DtDireccionComponent;
}());
exports.DtDireccionComponent = DtDireccionComponent;
//# sourceMappingURL=dt-direccion.component.js.map