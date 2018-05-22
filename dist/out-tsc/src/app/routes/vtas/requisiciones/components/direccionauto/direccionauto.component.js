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
//Service
var index_1 = require("../../../../../service/index");
var DireccionautoComponent = (function () {
    function DireccionautoComponent(service) {
        this.service = service;
        this.change = new core_1.EventEmitter();
        this.AddressCtrl = new forms_1.FormControl();
    }
    DireccionautoComponent.prototype.filterAddress = function (calle) {
        return this.filtrodireccion = this.Direcciones.filter(function (address) {
            return address.calle.toLowerCase().indexOf(calle.toLowerCase()) === 0;
        });
    };
    DireccionautoComponent.prototype.SendIdDireccion = function () {
        if (this.filtrodireccion != null) {
            this.IdDireccion = this.filtrodireccion[0].id;
            this.change.emit(this.IdDireccion);
        }
        else {
            this.IdDireccion = null;
        }
    };
    DireccionautoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAddress(this.filtroDamfo)
            .subscribe(function (data) {
            _this.Direcciones = data;
            _this.filteredAddress = _this.AddressCtrl.valueChanges
                .pipe(startWith_1.startWith(''), map_1.map(function (calle) { return calle ? _this.filterAddress(calle) : _this.Direcciones.slice(); }));
        });
    };
    __decorate([
        core_1.Input('Damfo'),
        __metadata("design:type", Object)
    ], DireccionautoComponent.prototype, "filtroDamfo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DireccionautoComponent.prototype, "IdDireccion", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DireccionautoComponent.prototype, "change", void 0);
    DireccionautoComponent = __decorate([
        core_1.Component({
            selector: 'app-direccionauto',
            templateUrl: './direccionauto.component.html',
            styleUrls: ['./direccionauto.component.scss'],
            providers: [index_1.RequisicionesService]
        }),
        __metadata("design:paramtypes", [index_1.RequisicionesService])
    ], DireccionautoComponent);
    return DireccionautoComponent;
}());
exports.DireccionautoComponent = DireccionautoComponent;
//# sourceMappingURL=direccionauto.component.js.map