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
var router_1 = require("@angular/router");
var UpdateRequisicionComponent = (function () {
    function UpdateRequisicionComponent(_Router) {
        var _this = this;
        this._Router = _Router;
        this._Router.params.subscribe(function (params) {
            if (params['IdRequi'] != null) {
                _this.requiId = params['IdRequi'];
                _this.folio = params['Folio'];
            }
            else {
                console.log("Error al Cargarla Información");
            }
        });
    }
    UpdateRequisicionComponent.prototype.ngOnInit = function () { };
    UpdateRequisicionComponent = __decorate([
        core_1.Component({
            selector: 'app-update-requisicion',
            templateUrl: './update-requisicion.component.html',
            styleUrls: ['./update-requisicion.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], UpdateRequisicionComponent);
    return UpdateRequisicionComponent;
}());
exports.UpdateRequisicionComponent = UpdateRequisicionComponent;
//# sourceMappingURL=update-requisicion.component.js.map