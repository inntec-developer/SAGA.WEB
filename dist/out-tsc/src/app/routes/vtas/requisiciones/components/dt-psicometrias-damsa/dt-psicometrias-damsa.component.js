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
var DtPsicometriasDamsaComponent = (function () {
    function DtPsicometriasDamsaComponent() {
        this.getPsicometria = false;
        //*******************************-- GRID-- *********************************************//
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'psicometrias',
            'descripcion'
        ];
    }
    DtPsicometriasDamsaComponent.prototype.ngOnInit = function () {
    };
    DtPsicometriasDamsaComponent.prototype.ngAfterContentChecked = function () {
        if (this.Psicometrias != null) {
            this.cargarPsicometrias(this.Psicometrias);
        }
    };
    DtPsicometriasDamsaComponent.prototype.cargarPsicometrias = function (data) {
        if (!this.getPsicometria) {
            this.dataSource = new material_1.MatTableDataSource(data);
            this.getPsicometria = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DtPsicometriasDamsaComponent.prototype, "Psicometrias", void 0);
    DtPsicometriasDamsaComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-psicometrias-damsa',
            templateUrl: './dt-psicometrias-damsa.component.html',
            styleUrls: ['./dt-psicometrias-damsa.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DtPsicometriasDamsaComponent);
    return DtPsicometriasDamsaComponent;
}());
exports.DtPsicometriasDamsaComponent = DtPsicometriasDamsaComponent;
//# sourceMappingURL=dt-psicometrias-damsa.component.js.map