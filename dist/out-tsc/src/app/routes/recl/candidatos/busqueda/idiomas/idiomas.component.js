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
var IdiomasComponent = (function () {
    function IdiomasComponent(service) {
        this.service = service;
        this.change = new core_1.EventEmitter();
        this.idiomasCtrl = new forms_1.FormControl();
    }
    IdiomasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getidiomas()
            .subscribe(function (data) {
            _this.idiomas = data;
            _this.filteredidiomas = _this.idiomasCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (id) { return id ? _this.filternvestudio(id) : _this.idiomas.slice(); }));
        });
    };
    IdiomasComponent.prototype.filternvestudio = function (idiom) {
        return this.filtroidioma = this.idiomas.filter(function (id) {
            return id.idioma.toLowerCase().indexOf(idiom.toLowerCase()) === 0;
        });
    };
    IdiomasComponent.prototype.SendIdIdioma = function () {
        var _this = this;
        this.filteredidiomas = this.idiomasCtrl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (id) { return id ? _this.filternvestudio(id) : _this.idiomas.slice(); }));
        if (this.filtroidioma != null) {
            this.Ididioma = this.filtroidioma[0].id;
            this.change.emit(this.Ididioma);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], IdiomasComponent.prototype, "change", void 0);
    IdiomasComponent = __decorate([
        core_1.Component({
            selector: 'app-idiomas',
            templateUrl: './idiomas.component.html',
            styleUrls: ['./idiomas.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], IdiomasComponent);
    return IdiomasComponent;
}());
exports.IdiomasComponent = IdiomasComponent;
//# sourceMappingURL=idiomas.component.js.map