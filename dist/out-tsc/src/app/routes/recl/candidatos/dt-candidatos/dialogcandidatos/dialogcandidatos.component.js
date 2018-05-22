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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
// Modelos
var candidatos_1 = require("../../../../../models/recl/candidatos");
// Servicios
var index_1 = require("../../../../../service/index");
var DialogcandidatosComponent = (function () {
    function DialogcandidatosComponent(dialogRef, data, service) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.displayedColumnsVacantes = ['Vacante', 'Accion'];
        this.displayedColumns = ['Vacante', 'Estatus'];
        this.dataSourcev = new material_2.MatTableDataSource([]);
        this.dataSource = new material_2.MatTableDataSource([]);
        this.step = 0;
        this.service.getpostulaciones(data[0].candidatoId)
            .subscribe(function (postulaciones) {
            _this.dataSource = new material_2.MatTableDataSource(postulaciones);
        });
        this.service.getvacantes()
            .subscribe(function (vacantes) {
            _this.dataSourcev = new material_2.MatTableDataSource(vacantes);
            console.log(vacantes);
        });
        this.service.getEstatusCandidato(data[0].candidatoId)
            .subscribe(function (estatus) {
            if (estatus.length == 0) {
                _this.Status = estatus.length;
                _this.Reclutador = 'Candidato disponible';
            }
            else {
                _this.Status = estatus[0].estatus;
                _this.Reclutador = estatus[0].reclutador;
                _this.requisicionId = estatus[0].requisicionId;
            }
            console.log(_this.requisicionId);
        });
    }
    DialogcandidatosComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSourcev.filter = filterValue;
    };
    DialogcandidatosComponent.prototype.ngOnInit = function () {
    };
    DialogcandidatosComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogcandidatosComponent.prototype.Apartar = function (idvct) {
        var Apartar = new candidatos_1.Apartado();
        Apartar.CandidatoId = this.data[0].candidatoId;
        Apartar.RequisicionId = idvct;
        Apartar.Reclutador = 'Inntec';
        Apartar.Estatus = 1;
        Apartar.TpContrato = 2;
        // Se manda el objeto con los datos necesarios paa su inserción al servicio.
        this.service.postApartar(Apartar)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    DialogcandidatosComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    DialogcandidatosComponent.prototype.nextStep = function () {
        this.step++;
    };
    DialogcandidatosComponent.prototype.prevStep = function () {
        this.step--;
    };
    DialogcandidatosComponent = __decorate([
        core_1.Component({
            selector: 'app-dialogcandidatos',
            templateUrl: './dialogcandidatos.component.html',
            styleUrls: ['./dialogcandidatos.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, index_1.CandidatosService])
    ], DialogcandidatosComponent);
    return DialogcandidatosComponent;
}());
exports.DialogcandidatosComponent = DialogcandidatosComponent;
//# sourceMappingURL=dialogcandidatos.component.js.map