"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_service_service_1 = require("./admin-service.service");
describe('AdminServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_service_service_1.AdminServiceService]
        });
    });
    it('should be created', testing_1.inject([admin_service_service_1.AdminServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-service.service.spec.js.map