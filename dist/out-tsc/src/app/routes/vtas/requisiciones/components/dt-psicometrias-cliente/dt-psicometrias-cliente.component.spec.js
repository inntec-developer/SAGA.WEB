"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dt_psicometrias_cliente_component_1 = require("./dt-psicometrias-cliente.component");
describe('DtPsicometriasClienteComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dt_psicometrias_cliente_component_1.DtPsicometriasClienteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dt_psicometrias_cliente_component_1.DtPsicometriasClienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dt-psicometrias-cliente.component.spec.js.map