"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var view_cuerpo_requi_component_1 = require("./view-cuerpo-requi.component");
describe('ViewCuerpoRequiComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [view_cuerpo_requi_component_1.ViewCuerpoRequiComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(view_cuerpo_requi_component_1.ViewCuerpoRequiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-cuerpo-requi.component.spec.js.map