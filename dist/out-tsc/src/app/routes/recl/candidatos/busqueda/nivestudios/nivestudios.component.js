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
var NivestudiosComponent = (function () {
    function NivestudiosComponent(service) {
        this.service = service;
        this.change = new core_1.EventEmitter();
        this.nvestudiosCtrl = new forms_1.FormControl();
    }
    NivestudiosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getnivelestudio()
            .subscribe(function (data) {
            _this.nvestuidios = data;
            _this.filterednvestudios = _this.nvestudiosCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (nv) { return nv ? _this.filternvestudio(nv) : _this.nvestuidios.slice(); }));
        });
    };
    NivestudiosComponent.prototype.filternvestudio = function (nvest) {
        return this.filtronv = this.nvestuidios.filter(function (nv) {
            return nv.gradoEstudio.toLowerCase().indexOf(nvest.toLowerCase()) === 0;
        });
    };
    NivestudiosComponent.prototype.SendIdnv = function () {
        var _this = this;
        this.filterednvestudios = this.nvestudiosCtrl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (nv) { return nv ? _this.filternvestudio(nv) : _this.nvestuidios.slice(); }));
        if (this.filtronv != null) {
            this.Idnv = this.filtronv[0].id;
            this.change.emit(this.Idnv);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NivestudiosComponent.prototype, "change", void 0);
    NivestudiosComponent = __decorate([
        core_1.Component({
            selector: 'app-nivestudios',
            templateUrl: './nivestudios.component.html',
            styleUrls: ['./nivestudios.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], NivestudiosComponent);
    return NivestudiosComponent;
}());
exports.NivestudiosComponent = NivestudiosComponent;
//# sourceMappingURL=nivestudios.component.js.map