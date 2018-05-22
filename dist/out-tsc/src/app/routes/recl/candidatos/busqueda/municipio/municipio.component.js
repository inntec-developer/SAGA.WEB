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
var MunicipioComponent = (function () {
    function MunicipioComponent(service) {
        this.service = service;
        this.IdMunicipio = 0;
        this.change = new core_1.EventEmitter();
        this.MunicipioCtrl = new forms_1.FormControl();
    }
    MunicipioComponent.prototype.ngOnInit = function () {
    };
    MunicipioComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filtroestado && !changes.filtroestado.isFirstChange()) {
            this.SendIdMunicipio();
        }
    };
    MunicipioComponent.prototype.filterMunicipio = function (municipio) {
        return this.filtromunicipio = this.Municipios.filter(function (muni) {
            return muni.municipio.toLowerCase().indexOf(municipio.toLowerCase()) === 0;
        });
    };
    MunicipioComponent.prototype.SendIdMunicipio = function () {
        var _this = this;
        if (this.filtroestado != null) {
            this.service.getmunicipios(this.filtroestado)
                .subscribe(function (data) {
                _this.Municipios = data.municipios;
                _this.filteredMunicipio = _this.MunicipioCtrl.valueChanges
                    .pipe(startWith_1.startWith(''), map_1.map(function (municipio) { return municipio ? _this.filterMunicipio(municipio) : _this.Municipios.slice(); }));
            });
            if (this.filtromunicipio != null) {
                this.IdMunicipio = this.filtromunicipio[0].id;
                this.change.emit(this.IdMunicipio);
            }
        }
    };
    __decorate([
        core_1.Input('Estado'),
        __metadata("design:type", Object)
    ], MunicipioComponent.prototype, "filtroestado", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MunicipioComponent.prototype, "IdMunicipio", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MunicipioComponent.prototype, "change", void 0);
    MunicipioComponent = __decorate([
        core_1.Component({
            selector: 'app-municipio',
            templateUrl: './municipio.component.html',
            styleUrls: ['./municipio.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], MunicipioComponent);
    return MunicipioComponent;
}());
exports.MunicipioComponent = MunicipioComponent;
//# sourceMappingURL=municipio.component.js.map