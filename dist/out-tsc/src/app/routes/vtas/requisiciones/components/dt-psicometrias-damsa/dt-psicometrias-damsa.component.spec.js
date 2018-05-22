"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dt_psicometrias_damsa_component_1 = require("./dt-psicometrias-damsa.component");
describe('DtPsicometriasDamsaComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dt_psicometrias_damsa_component_1.DtPsicometriasDamsaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dt_psicometrias_damsa_component_1.DtPsicometriasDamsaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dt-psicometrias-damsa.component.spec.js.map