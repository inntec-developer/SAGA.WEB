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
var DtTelefonosComponent = (function () {
    function DtTelefonosComponent() {
        this.getPhone = false;
        //*******************************-- GRID-- *********************************************//
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'tipoTelefono',
            'telefono',
            'extension',
            'activo',
            'esPrincipal',
        ];
    }
    DtTelefonosComponent.prototype.ngOnInit = function () {
    };
    DtTelefonosComponent.prototype.ngAfterContentChecked = function () {
        if (this.Telefonos != null) {
            this.cargarTelefonos(this.Telefonos);
        }
    };
    DtTelefonosComponent.prototype.cargarTelefonos = function (data) {
        if (!this.getPhone) {
            this.dataSource = new material_1.MatTableDataSource(data);
            this.getPhone = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DtTelefonosComponent.prototype, "Telefonos", void 0);
    DtTelefonosComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-telefonos',
            templateUrl: './dt-telefonos.component.html',
            styleUrls: ['./dt-telefonos.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DtTelefonosComponent);
    return DtTelefonosComponent;
}());
exports.DtTelefonosComponent = DtTelefonosComponent;
//# sourceMappingURL=dt-telefonos.component.js.map