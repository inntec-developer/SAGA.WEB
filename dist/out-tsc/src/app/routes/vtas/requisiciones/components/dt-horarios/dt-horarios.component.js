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
var DtHorariosComponent = (function () {
    function DtHorariosComponent() {
        this.getHorarios = false;
        //*******************************-- GRID-- *********************************************//
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'nombre',
            'deDia',
            'aDia',
            'deHora',
            'aHora',
            'vacantes',
            'especificaciones',
            'activo'
        ];
    }
    DtHorariosComponent.prototype.ngOnInit = function () {
    };
    DtHorariosComponent.prototype.ngAfterContentChecked = function () {
        if (this.Horarios != null) {
            this.cargarHorarios(this.Horarios);
        }
    };
    DtHorariosComponent.prototype.cargarHorarios = function (data) {
        if (!this.getHorarios) {
            this.dataSource = new material_1.MatTableDataSource(data);
            this.getHorarios = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DtHorariosComponent.prototype, "Horarios", void 0);
    DtHorariosComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-horarios',
            templateUrl: './dt-horarios.component.html',
            styleUrls: ['./dt-horarios.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DtHorariosComponent);
    return DtHorariosComponent;
}());
exports.DtHorariosComponent = DtHorariosComponent;
//# sourceMappingURL=dt-horarios.component.js.map