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
//Servicios
var index_1 = require("../../../../../service/index");
var ViewInforRequiComponent = (function () {
    function ViewInforRequiComponent(fb, serviceRequisicion, serviceCatalogos) {
        this.fb = fb;
        this.serviceRequisicion = serviceRequisicion;
        this.serviceCatalogos = serviceCatalogos;
        this.checked = false;
        this.formRequi = new forms_1.FormGroup({
            folio: new forms_1.FormControl(),
            fch_Solicitud: new forms_1.FormControl(),
            prioridad: new forms_1.FormControl(),
            fch_Cumplimiento: new forms_1.FormControl(),
            confidencial: new forms_1.FormControl(),
            estatus: new forms_1.FormControl(),
        });
    }
    ViewInforRequiComponent.prototype.ngOnInit = function () {
        this.getPrioridades();
        this.getEsattus(2);
        this.formRequi = this.fb.group({
            folio: [{ value: '', disabled: true }],
            fch_Solicitud: [{ value: '', disabled: true }],
            prioridad: [{ value: '', disabled: true }, forms_1.Validators.required],
            fch_Cumplimiento: [{ value: '', disabled: true }, forms_1.Validators.required],
            confidencial: [{ value: false, disabled: true }],
            estatus: [{ value: '', disabled: true }, forms_1.Validators.required],
        });
    };
    ViewInforRequiComponent.prototype.ngAfterContentChecked = function () {
        if (this.Folios != null && this.checked == false) {
            this.checked = true;
            this.getInitialData();
        }
    };
    ViewInforRequiComponent.prototype.getInitialData = function () {
        var _this = this;
        this.serviceRequisicion.getRequiFolio(this.Folios)
            .subscribe(function (DataRequisicion) {
            _this.RequiId = DataRequisicion.id;
            _this.formRequi.patchValue({
                folio: DataRequisicion.folio,
                fch_Solicitud: DataRequisicion.fch_Creacion,
                prioridad: DataRequisicion.prioridad.id,
                estatus: DataRequisicion.estatus.id,
                fch_Cumplimiento: DataRequisicion.fch_Cumplimiento,
                confidencial: DataRequisicion.confidencial,
            });
        });
    };
    ViewInforRequiComponent.prototype.getPrioridades = function () {
        var _this = this;
        this.serviceCatalogos.getPrioridades()
            .subscribe(function (data) {
            _this.Prioridades = data;
        });
    };
    ViewInforRequiComponent.prototype.getEsattus = function (tipoMov) {
        var _this = this;
        this.serviceCatalogos.getEstatusRequi(tipoMov)
            .subscribe(function (data) {
            _this.Estatus = data;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ViewInforRequiComponent.prototype, "Folios", void 0);
    ViewInforRequiComponent = __decorate([
        core_1.Component({
            selector: 'app-view-info-requi',
            templateUrl: './view-info-requi.component.html',
            styleUrls: ['./view-info-requi.component.scss'],
            providers: [index_1.RequisicionesService, index_1.CatalogosService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            index_1.RequisicionesService,
            index_1.CatalogosService])
    ], ViewInforRequiComponent);
    return ViewInforRequiComponent;
}());
exports.ViewInforRequiComponent = ViewInforRequiComponent;
//# sourceMappingURL=view-info-requi.component.js.map