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
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
// Servicios
var index_1 = require("../../../../../service/index");
var TplicenciaComponent = (function () {
    function TplicenciaComponent(service) {
        this.service = service;
        this.change = new core_1.EventEmitter();
        this.tplicCtrl = new forms_1.FormControl();
    }
    TplicenciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.gettplicencia()
            .subscribe(function (data) {
            _this.tplicencia = data;
            _this.filteredtplicencia = _this.tplicCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (tp) { return tp ? _this.filtertplicencia(tp) : _this.tplicencia.slice(); }));
        });
    };
    TplicenciaComponent.prototype.filtertplicencia = function (tplic) {
        return this.filtrotplic = this.tplicencia.filter(function (tp) {
            return tp.descripcion.toLowerCase().indexOf(tplic.toLowerCase()) === 0;
        });
    };
    TplicenciaComponent.prototype.SendIdTpLic = function () {
        var _this = this;
        this.filteredtplicencia = this.tplicCtrl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (tp) { return tp ? _this.filtertplicencia(tp) : _this.tplicencia.slice(); }));
        if (this.filtrotplic != null) {
            this.Idtplic = this.filtrotplic[0].id;
            this.change.emit(this.Idtplic);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TplicenciaComponent.prototype, "change", void 0);
    TplicenciaComponent = __decorate([
        core_1.Component({
            selector: 'app-tplicencia',
            templateUrl: './tplicencia.component.html',
            styleUrls: ['./tplicencia.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], TplicenciaComponent);
    return TplicenciaComponent;
}());
exports.TplicenciaComponent = TplicenciaComponent;
//# sourceMappingURL=tplicencia.component.js.map