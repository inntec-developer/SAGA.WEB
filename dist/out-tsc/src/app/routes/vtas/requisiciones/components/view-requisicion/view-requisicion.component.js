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
var ViewRequisicionComponent = (function () {
    function ViewRequisicionComponent(_Router, _Route) {
        var _this = this;
        this._Router = _Router;
        this._Route = _Route;
        this._Route.params.subscribe(function (params) {
            if (params['IdRequi'] != null) {
                _this.requiId = params['IdRequi'];
                _this.folio = params['Folio'];
            }
            else {
                console.log("Error al cargar la información.");
            }
        });
    }
    ViewRequisicionComponent.prototype.ngOnInit = function () { };
    ViewRequisicionComponent.prototype.editRequi = function () {
        this._Router.navigate(['/ventas/edicionRequisicion', this.requiId, this.folio], { skipLocationChange: true });
    };
    ViewRequisicionComponent = __decorate([
        core_1.Component({
            selector: 'app-view-requisicion',
            templateUrl: './view-requisicion.component.html',
            styleUrls: ['./view-requisicion.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute])
    ], ViewRequisicionComponent);
    return ViewRequisicionComponent;
}());
exports.ViewRequisicionComponent = ViewRequisicionComponent;
//# sourceMappingURL=view-requisicion.component.js.map