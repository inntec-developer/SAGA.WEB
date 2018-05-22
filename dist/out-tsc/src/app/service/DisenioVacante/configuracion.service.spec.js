"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var configuracion_service_1 = require("./configuracion.service");
describe('ConfiguracionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [configuracion_service_1.ConfiguracionService]
        });
    });
    it('should be created', testing_1.inject([configuracion_service_1.ConfiguracionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=configuracion.service.spec.js.map