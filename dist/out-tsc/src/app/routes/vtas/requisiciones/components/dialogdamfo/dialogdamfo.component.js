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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
//Services
var index_1 = require("../../../../../service/index");
var DialogdamfoComponent = (function () {
    function DialogdamfoComponent(dialogRef, _Router, _Route, toasterService, data, service) {
        this.dialogRef = dialogRef;
        this._Router = _Router;
        this._Route = _Route;
        this.toasterService = toasterService;
        this.data = data;
        this.service = service;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-bottom-right',
            limit: 7, tapToDismiss: false,
            showCloseButton: true,
            mouseoverTimerStop: true,
        });
    }
    DialogdamfoComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            timeout: 2000,
            body: body
        };
        this.toasterService.pop(toast);
    };
    DialogdamfoComponent.prototype.ngOnInit = function () {
        this.IdDamfo = this.data.id;
        this.formDireccion = new forms_1.FormGroup({
            direccion: new forms_1.FormControl()
        });
    };
    DialogdamfoComponent.prototype.FiltroDireccion = function (event) {
        this.IdDireccion = event;
    };
    DialogdamfoComponent.prototype.ngOnChanges = function (change) {
        if (change.IdDireccion && !change.IdDireccion.isFirstChange()) {
            alert(this.IdDireccion);
        }
    };
    DialogdamfoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogdamfoComponent.prototype.createRequisicion = function () {
        if (this.IdDireccion != null) {
            this._Router.navigate(['/ventas/requisicionNueva', this.IdDamfo, this.IdDireccion], { skipLocationChange: true });
            this.onNoClick();
        }
        else {
            this.popToast('error', 'Oops!!', 'Seleccione una dirección para continuar');
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DialogdamfoComponent.prototype, "IdDireccion", void 0);
    DialogdamfoComponent = __decorate([
        core_1.Component({
            selector: 'app-dialogdamfo',
            templateUrl: './dialogdamfo.component.html',
            styleUrls: ['./dialogdamfo.component.scss'],
            providers: [index_1.RequisicionesService]
        }),
        __param(4, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            router_1.Router,
            router_1.ActivatedRoute,
            angular2_toaster_1.ToasterService, Object, index_1.RequisicionesService])
    ], DialogdamfoComponent);
    return DialogdamfoComponent;
}());
exports.DialogdamfoComponent = DialogdamfoComponent;
//# sourceMappingURL=dialogdamfo.component.js.map