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
var PaisComponent = (function () {
    function PaisComponent(service) {
        this.service = service;
        // Declarar variables.
        this.IdPais = 0;
        this.change = new core_1.EventEmitter();
        this.countryCtrl = new forms_1.FormControl();
    }
    PaisComponent.prototype.filterCountry = function (pais) {
        return this.filtropais = this.Paises.filter(function (country) {
            return country.pais.toLowerCase().indexOf(pais.toLowerCase()) === 0;
        });
    };
    PaisComponent.prototype.SendIdCountry = function () {
        if (this.filtropais != null) {
            this.IdPais = this.filtropais[0].id;
            this.change.emit(this.IdPais);
        }
        else {
            this.IdPais = 0;
        }
    };
    PaisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getpaises()
            .subscribe(function (data) {
            _this.Paises = data.paises;
            _this.filteredCountry = _this.countryCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (pais) { return pais ? _this.filterCountry(pais) : _this.Paises.slice(); }));
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaisComponent.prototype, "IdPais", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PaisComponent.prototype, "change", void 0);
    PaisComponent = __decorate([
        core_1.Component({
            selector: 'app-pais',
            templateUrl: './pais.component.html',
            styleUrls: ['./pais.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], PaisComponent);
    return PaisComponent;
}());
exports.PaisComponent = PaisComponent;
//# sourceMappingURL=pais.component.js.map