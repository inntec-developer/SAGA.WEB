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
var EdadComponent = (function () {
    function EdadComponent(fb) {
        this.change = new core_1.EventEmitter();
    }
    EdadComponent.prototype.FiltroEdad = function (edad) {
        this.Edad = edad;
        this.change.emit(this.Edad);
    };
    EdadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EdadComponent.prototype, "change", void 0);
    EdadComponent = __decorate([
        core_1.Component({
            selector: 'app-edad',
            templateUrl: './edad.component.html',
            styleUrls: ['./edad.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], EdadComponent);
    return EdadComponent;
}());
exports.EdadComponent = EdadComponent;
//# sourceMappingURL=edad.component.js.map