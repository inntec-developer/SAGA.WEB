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
//Servicios
var index_1 = require("../../../../../service/index");
//Models
var Requisicion_1 = require("../../../../../models/vtas/Requisicion");
var RequisicionNuevaComponent = (function () {
    function RequisicionNuevaComponent(serviceCatalogo, serviceRequisiciones, _Router, _Route, spinner, fb) {
        this.serviceCatalogo = serviceCatalogo;
        this.serviceRequisiciones = serviceRequisiciones;
        this._Router = _Router;
        this._Route = _Route;
        this.spinner = spinner;
        this.fb = fb;
    }
    RequisicionNuevaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this._Route.params.subscribe(function (params) {
            if (params['IdDamfo'] != null && params['IdDireccion'] != null) {
                _this.damfoId = params['IdDamfo'];
                _this.direccionId = params['IdDireccion'];
                _this.createRequi = true;
            }
            else {
                _this.createRequi = false;
            }
            if (_this.createRequi) {
                _this.createRequisicion();
            }
        });
    };
    RequisicionNuevaComponent.prototype.createRequisicion = function () {
        var _this = this;
        var datas = new Requisicion_1.CreateRequisicion();
        datas.IdDamfo = this.damfoId;
        datas.IdAddress = this.direccionId;
        this.serviceRequisiciones.createNewRequi(datas)
            .subscribe(function (data) {
            _this.requisicionId = data;
        });
    };
    RequisicionNuevaComponent = __decorate([
        core_1.Component({
            selector: 'app-requisicion-nueva',
            templateUrl: './requisicion-nueva.component.html',
            styleUrls: ['./requisicion-nueva.component.scss'],
            providers: [index_1.CatalogosService, index_1.RequisicionesService]
        }),
        __metadata("design:paramtypes", [index_1.CatalogosService,
            index_1.RequisicionesService,
            router_1.Router,
            router_1.ActivatedRoute,
            ngx_spinner_1.NgxSpinnerService,
            forms_1.FormBuilder])
    ], RequisicionNuevaComponent);
    return RequisicionNuevaComponent;
}());
exports.RequisicionNuevaComponent = RequisicionNuevaComponent;
//# sourceMappingURL=requisicion-nueva.component.js.map