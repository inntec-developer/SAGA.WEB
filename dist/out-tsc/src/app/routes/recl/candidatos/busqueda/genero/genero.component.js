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
var GeneroComponent = (function () {
    function GeneroComponent(service) {
        this.service = service;
        this.change = new core_1.EventEmitter();
        this.generoCtrl = new forms_1.FormControl();
    }
    GeneroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getgeneros()
            .subscribe(function (data) {
            _this.Generos = data;
            _this.filteredgenero = _this.generoCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (genero) { return genero ? _this.filtergenero(genero) : _this.Generos.slice(); }));
        });
    };
    GeneroComponent.prototype.filtergenero = function (genero) {
        return this.filtrogenero = this.Generos.filter(function (generos) {
            return generos.genero.toLowerCase().indexOf(genero.toLowerCase()) === 0;
        });
    };
    GeneroComponent.prototype.SendIdGenero = function () {
        var _this = this;
        this.filteredgenero = this.generoCtrl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (genero) { return genero ? _this.filtergenero(genero) : _this.Generos.slice(); }));
        if (this.filtrogenero != null) {
            this.Idgenero = this.filtrogenero[0].id;
            this.change.emit(this.Idgenero);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GeneroComponent.prototype, "change", void 0);
    GeneroComponent = __decorate([
        core_1.Component({
            selector: 'app-genero',
            templateUrl: './genero.component.html',
            styleUrls: ['./genero.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], GeneroComponent);
    return GeneroComponent;
}());
exports.GeneroComponent = GeneroComponent;
//# sourceMappingURL=genero.component.js.map