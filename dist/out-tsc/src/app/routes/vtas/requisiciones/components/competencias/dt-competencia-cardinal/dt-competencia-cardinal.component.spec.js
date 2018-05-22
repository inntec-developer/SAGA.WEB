"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dt_competencia_cardinal_component_1 = require("./dt-competencia-cardinal.component");
describe('DtCompetenciaCardinalComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dt_competencia_cardinal_component_1.DtCompetenciaCardinalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dt_competencia_cardinal_component_1.DtCompetenciaCardinalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dt-competencia-cardinal.component.spec.js.map