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
var DtBeneficiosComponent = (function () {
    function DtBeneficiosComponent() {
        this.getBeneficio = false;
        //*******************************-- GRID-- *********************************************//
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'beneficio',
            'cantidad',
            'observeciones'
        ];
    }
    DtBeneficiosComponent.prototype.ngOnInit = function () {
    };
    DtBeneficiosComponent.prototype.ngAfterContentChecked = function () {
        if (this.Beneficios != null) {
            this.cargarBeneficios(this.Beneficios);
        }
    };
    DtBeneficiosComponent.prototype.cargarBeneficios = function (data) {
        if (!this.getBeneficio) {
            this.dataSource = new material_1.MatTableDataSource(data);
            this.getBeneficio = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DtBeneficiosComponent.prototype, "Beneficios", void 0);
    DtBeneficiosComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-beneficios',
            templateUrl: './dt-beneficios.component.html',
            styleUrls: ['./dt-beneficios.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DtBeneficiosComponent);
    return DtBeneficiosComponent;
}());
exports.DtBeneficiosComponent = DtBeneficiosComponent;
//# sourceMappingURL=dt-beneficios.component.js.map