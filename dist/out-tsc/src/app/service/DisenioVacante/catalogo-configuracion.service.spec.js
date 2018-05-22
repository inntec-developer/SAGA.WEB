"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var catalogo_configuracion_service_1 = require("./catalogo-configuracion.service");
describe('CatalogoConfiguracionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [catalogo_configuracion_service_1.CatalogoConfiguracionService]
        });
    });
    it('should be created', testing_1.inject([catalogo_configuracion_service_1.CatalogoConfiguracionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=catalogo-configuracion.service.spec.js.map