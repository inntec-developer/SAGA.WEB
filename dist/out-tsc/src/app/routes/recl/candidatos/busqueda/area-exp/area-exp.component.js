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
var AreaExpComponent = (function () {
    function AreaExpComponent(service) {
        this.service = service;
        this.change = new core_1.EventEmitter();
        this.aresexpCtrl = new forms_1.FormControl();
    }
    AreaExpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getareasexp()
            .subscribe(function (data) {
            _this.Areasexp = data;
            _this.filteredareaexp = _this.aresexpCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (area) { return area ? _this.filterareaexp(area) : _this.Areasexp.slice(); }));
        });
    };
    AreaExpComponent.prototype.filterareaexp = function (area) {
        return this.filtroareaexp = this.Areasexp.filter(function (areaexp) {
            return areaexp.areaExperiencia.toLowerCase().indexOf(area.toLowerCase()) === 0;
        });
    };
    AreaExpComponent.prototype.SendIdExp = function () {
        var _this = this;
        this.filteredareaexp = this.aresexpCtrl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (area) { return area ? _this.filterareaexp(area) : _this.Areasexp.slice(); }));
        if (this.filtroareaexp != null) {
            this.IdExp = this.filtroareaexp[0].id;
            this.change.emit(this.IdExp);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AreaExpComponent.prototype, "change", void 0);
    AreaExpComponent = __decorate([
        core_1.Component({
            selector: 'app-area-exp',
            templateUrl: './area-exp.component.html',
            styleUrls: ['./area-exp.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], AreaExpComponent);
    return AreaExpComponent;
}());
exports.AreaExpComponent = AreaExpComponent;
//# sourceMappingURL=area-exp.component.js.map