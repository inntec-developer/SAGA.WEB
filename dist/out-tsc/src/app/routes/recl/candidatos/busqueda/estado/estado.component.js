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
var EstadoComponent = (function () {
    function EstadoComponent(service) {
        this.service = service;
        this.IdEstado = 0;
        this.change = new core_1.EventEmitter();
        this.StatesCtrl = new forms_1.FormControl();
        // this.StatesCtrl = new FormControl();
    }
    EstadoComponent.prototype.ngOnInit = function () {
    };
    EstadoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filtropais && !changes.filtropais.isFirstChange()) {
            this.SendIdState();
        }
    };
    EstadoComponent.prototype.filterState = function (estado) {
        return this.filtroestado = this.Estados.filter(function (state) {
            return state.estado.toLowerCase().indexOf(estado.toLowerCase()) === 0;
        });
    };
    EstadoComponent.prototype.SendIdState = function () {
        var _this = this;
        if (this.filtropais != null) {
            this.service.getestados(this.filtropais)
                .subscribe(function (data) {
                _this.Estados = data.estados;
                _this.filteredStates = _this.StatesCtrl.valueChanges
                    .pipe(startWith_1.startWith(''), map_1.map(function (estado) { return estado ? _this.filterState(estado) : _this.Estados.slice(); }));
            });
            if (this.filtroestado != null) {
                this.IdEstado = this.filtroestado[0].id;
                this.change.emit(this.IdEstado);
            }
        }
    };
    __decorate([
        core_1.Input('Pais'),
        __metadata("design:type", Object)
    ], EstadoComponent.prototype, "filtropais", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EstadoComponent.prototype, "IdEstado", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EstadoComponent.prototype, "change", void 0);
    EstadoComponent = __decorate([
        core_1.Component({
            selector: 'app-estado',
            templateUrl: './estado.component.html',
            styleUrls: ['./estado.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService])
    ], EstadoComponent);
    return EstadoComponent;
}());
exports.EstadoComponent = EstadoComponent;
//# sourceMappingURL=estado.component.js.map