"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var menu_service_1 = require("./menu.service");
describe('Service: Menu', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [menu_service_1.MenuService]
        });
    });
    it('should ...', testing_1.inject([menu_service_1.MenuService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=menu.service.spec.js.map