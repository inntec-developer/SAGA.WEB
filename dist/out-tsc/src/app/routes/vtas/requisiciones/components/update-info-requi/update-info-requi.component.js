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
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
//Servicios
var index_1 = require("../../../../../service/index");
var forms_1 = require("@angular/forms");
var UpdateInfoRequiComponent = (function () {
    function UpdateInfoRequiComponent(fb, serviceRequisicion, serviceCatalogos, toasterService) {
        this.fb = fb;
        this.serviceRequisicion = serviceRequisicion;
        this.serviceCatalogos = serviceCatalogos;
        this.toasterService = toasterService;
        this.checked = false;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-bottom-right',
            limit: 7, tapToDismiss: false,
            showCloseButton: true,
            mouseoverTimerStop: true,
        });
        this.formRequi = new forms_1.FormGroup({
            folio: new forms_1.FormControl('', [forms_1.Validators.required]),
            fch_Solicitud: new forms_1.FormControl('', [forms_1.Validators.required]),
            prioridad: new forms_1.FormControl('', [forms_1.Validators.required]),
            fch_Cumplimiento: new forms_1.FormControl('', [forms_1.Validators.required]),
            confidencial: new forms_1.FormControl(),
            estatus: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
    }
    UpdateInfoRequiComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            timeout: 2000,
            body: body
        };
        this.toasterService.pop(toast);
    };
    UpdateInfoRequiComponent.prototype.ngOnInit = function () {
        this.getPrioridades();
        this.getEsattus(2);
        this.formRequi = this.fb.group({
            folio: [{ value: '', disabled: true }],
            fch_Solicitud: [{ value: '', disabled: true }],
            prioridad: [{ value: '' }, forms_1.Validators.required],
            fch_Cumplimiento: [{ value: '' }, forms_1.Validators.required],
            confidencial: [false],
            estatus: [{ value: '' }, forms_1.Validators.required]
        });
    };
    UpdateInfoRequiComponent.prototype.ngAfterContentChecked = function () {
        if (this.Folios != null && this.checked == false) {
            this.checked = true;
            this.getInitialData();
        }
    };
    UpdateInfoRequiComponent.prototype.getInitialData = function () {
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
    UpdateInfoRequiComponent.prototype.getPrioridades = function () {
        var _this = this;
        this.serviceCatalogos.getPrioridades()
            .subscribe(function (data) {
            _this.Prioridades = data;
        });
    };
    UpdateInfoRequiComponent.prototype.getEsattus = function (tipoMov) {
        var _this = this;
        this.serviceCatalogos.getEstatusRequi(tipoMov)
            .subscribe(function (data) {
            _this.Estatus = data;
        });
    };
    UpdateInfoRequiComponent.prototype.Save = function () {
        var _this = this;
        var update = {
            id: this.RequiId,
            folio: this.formRequi.get('folio').value,
            prioridadId: this.formRequi.get('prioridad').value,
            fch_Cumplimiento: this.formRequi.get('fch_Cumplimiento').value,
            estatusId: this.formRequi.get('estatus').value,
            confidencial: this.formRequi.get('confidencial').value
        };
        this.requiUpdate = update;
        this.serviceRequisicion.updateRequisicion(this.requiUpdate)
            .subscribe(function (data) {
            _this.return = data;
            if (_this.return) {
                _this.popToast('success', 'Requisicion', 'Actualizacion de información Folio: ' + data.folio);
            }
            else {
                _this.popToast('error', 'Oops!!', 'Algo salio mal intente de nuevo');
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UpdateInfoRequiComponent.prototype, "Folios", void 0);
    UpdateInfoRequiComponent = __decorate([
        core_1.Component({
            selector: 'app-update-info-requi',
            templateUrl: './update-info-requi.component.html',
            styleUrls: ['./update-info-requi.component.scss'],
            providers: [index_1.RequisicionesService, index_1.CatalogosService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            index_1.RequisicionesService,
            index_1.CatalogosService,
            angular2_toaster_1.ToasterService])
    ], UpdateInfoRequiComponent);
    return UpdateInfoRequiComponent;
}());
exports.UpdateInfoRequiComponent = UpdateInfoRequiComponent;
//# sourceMappingURL=update-info-requi.component.js.map