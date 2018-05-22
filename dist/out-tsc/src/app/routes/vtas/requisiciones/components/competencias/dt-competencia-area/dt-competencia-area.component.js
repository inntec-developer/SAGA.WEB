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
var DtCompetenciaAreaComponent = (function () {
    function DtCompetenciaAreaComponent() {
        this.getCompetencia = false;
        //*******************************-- GRID-- *********************************************//
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'competencia',
            'nivel'
        ];
    }
    DtCompetenciaAreaComponent.prototype.ngOnInit = function () {
    };
    DtCompetenciaAreaComponent.prototype.ngAfterContentChecked = function () {
        if (this.Competencias != null) {
            this.cargarCompetencia(this.Competencias);
        }
    };
    DtCompetenciaAreaComponent.prototype.cargarCompetencia = function (data) {
        if (!this.getCompetencia) {
            this.dataSource = new material_1.MatTableDataSource(data);
            this.getCompetencia = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DtCompetenciaAreaComponent.prototype, "Competencias", void 0);
    DtCompetenciaAreaComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-competencia-area',
            templateUrl: './dt-competencia-area.component.html',
            styleUrls: ['./dt-competencia-area.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DtCompetenciaAreaComponent);
    return DtCompetenciaAreaComponent;
}());
exports.DtCompetenciaAreaComponent = DtCompetenciaAreaComponent;
//# sourceMappingURL=dt-competencia-area.component.js.map