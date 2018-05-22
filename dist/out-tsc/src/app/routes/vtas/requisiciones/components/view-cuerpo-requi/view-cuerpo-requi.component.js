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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ngx_spinner_1 = require("ngx-spinner");
//Services
var index_1 = require("../../../../../service/index");
var ViewCuerpoRequiComponent = (function () {
    function ViewCuerpoRequiComponent(serviceRequisiciones, _Router, _Route, spinner, fb) {
        this.serviceRequisiciones = serviceRequisiciones;
        this._Router = _Router;
        this._Route = _Route;
        this.spinner = spinner;
        this.fb = fb;
        this.checked = false;
    }
    ViewCuerpoRequiComponent.prototype.ngOnInit = function () {
        this.formCliente = this.fb.group({
            nombrecomercial: [{ value: '', disabled: true }],
            razonSocial: [{ value: '', disabled: true }],
            rfc: [{ value: '', disabled: true }],
            giroEmpresa: [{ value: '', disabled: true }],
            actividadEmpresas: [{ value: '', disabled: true }]
        });
        this.formRecl = this.fb.group({
            tipo: [{ value: '', disabled: true }],
            clase: [{ value: '', disabled: true }]
        });
        this.formContrato = this.fb.group({
            tipoContrato: [{ value: '', disabled: true }],
            diasPrueba: [{ value: '', disabled: true }]
        });
        this.formPerfil = this.fb.group({
            vBtra: [{ value: '', disabled: true }],
            edadMinima: [{ value: '', disabled: true }],
            edadMaxima: [{ value: '', disabled: true }],
            genero: [{ value: '', disabled: true }],
            estadoCivil: [{ value: '', disabled: true }],
        });
        this.formSueldo = this.fb.group({
            diaCorte: [{ value: '', disabled: true }],
            tipoNomina: [{ value: '', disabled: true }],
            diaPago: [{ value: '', disabled: true }],
            periodoPago: [{ value: '', disabled: true }],
            especifique: [{ value: '', disabled: true }],
        });
    };
    ViewCuerpoRequiComponent.prototype.ngAfterContentChecked = function () {
        if (this.Requisicion != null && this.checked == false) {
            this.checked = true;
            this.GetInfromation();
        }
    };
    ViewCuerpoRequiComponent.prototype.GetInfromation = function () {
        var _this = this;
        this.spinner.show();
        this.requiId = this.Requisicion;
        this.serviceRequisiciones.getNewRequi(this.requiId)
            .subscribe(function (data) {
            _this.formCliente.patchValue({
                nombrecomercial: data.cliente.nombrecomercial,
                razonSocial: data.cliente.razonSocial,
                rfc: data.cliente.rfc,
                giroEmpresa: data.cliente.giroEmpresas.giroEmpresa,
                actividadEmpresas: data.cliente.actividadEmpresas.actividadEmpresa
            });
            _this.formRecl.patchValue({
                tipo: data.tipoReclutamiento.tipoReclutamiento,
                clase: data.claseReclutamiento.clasesReclutamiento
            });
            _this.formContrato.patchValue({
                tipoContrato: data.contratoInicial.tipoContrato,
                diasPrueba: data.tiempoContrato.tiempo
            });
            _this.formPerfil.patchValue({
                vBtra: data.vBtra,
                edadMinima: data.edadMinima,
                edadMaxima: data.edadMaxima,
                genero: data.genero.genero,
                estadoCivil: data.estadoCivil.estadoCivil
            });
            _this.formSueldo.patchValue({
                diaCorte: data.diaCorte.diaSemana,
                tipoNomina: data.tipoNomina.tipoDeNomina,
                diaPago: data.diaPago.diaSemana,
                periodoPago: data.periodoPago.periodoPago,
                especifique: data.especifique
            });
            _this.requisicion = data;
            _this.spinner.hide();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ViewCuerpoRequiComponent.prototype, "Requisicion", void 0);
    ViewCuerpoRequiComponent = __decorate([
        core_1.Component({
            selector: 'app-view-cuerpo-requi',
            templateUrl: './view-cuerpo-requi.component.html',
            styleUrls: ['./view-cuerpo-requi.component.scss'],
            providers: [index_1.RequisicionesService, index_1.CatalogosService]
        }),
        __metadata("design:paramtypes", [index_1.RequisicionesService,
            router_1.Router,
            router_1.ActivatedRoute,
            ngx_spinner_1.NgxSpinnerService,
            forms_1.FormBuilder])
    ], ViewCuerpoRequiComponent);
    return ViewCuerpoRequiComponent;
}());
exports.ViewCuerpoRequiComponent = ViewCuerpoRequiComponent;
//# sourceMappingURL=view-cuerpo-requi.component.js.map