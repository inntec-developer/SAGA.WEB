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
var ColoniaComponent = (function () {
    function ColoniaComponent(service) {
        this.service = service;
        this.IdColonia = 0;
        this.change = new core_1.EventEmitter();
        this.ColoniaCtrl = new forms_1.FormControl();
    }
    ColoniaComponent.prototype.ngOnInit = function () {
    };
    ColoniaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filtromunicipio && !changes.filtromunicipio.isFirstChange()) {
            this.SendIdColonia();
        }
    };
    ColoniaComponent.prototype.filterColonia = function (colonia) {
        return this.Colonias.filter(function (col) {
            return col.colonia.toLowerCase().indexOf(colonia.toLowerCase()) === 0;
        });
    };
    ColoniaComponent.prototype.SendIdColonia = function () {
        var _this = this;
        if (this.filtromunicipio != null) {
            this.service.getcolonias(this.filtromunicipio)
                .subscribe(function (data) {
                _this.Colonias = data.colonias;
                _this.filteredColonia = _this.ColoniaCtrl.valueChanges
                    .pipe(startWith_1.startWith(''), map_1.map(function (colonia) { return colonia ? _this.filterColonia(colonia) : _this.Colonias.slice(); }));
            });
            if (this.filtroColonia != null) {
                this.IdColonia = this.filtroColonia[0].id;
                this.change.emit(this.IdColonia);
            }
        }
    };
    __decorate([
        core_1.Input('Municipio'),
        __metadata("design:type", Object)
    ], ColoniaComponent.prototype, "filtromunicipio", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ColoniaComponent.prototype, "IdColonia", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ColoniaComponent.prototype, "change", void 0);
    ColoniaComponent = __decorate([
        core_1.Component({
            selector: 'app-colonia',
            templateUrl: './colonia.component.html',
            styleUrls: ['./colonia.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], ColoniaComponent);
    return ColoniaComponent;
}());
exports.ColoniaComponent = ColoniaComponent;
//# sourceMappingURL=colonia.component.js.map