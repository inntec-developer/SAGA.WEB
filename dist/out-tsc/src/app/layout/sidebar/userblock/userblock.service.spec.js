"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var userblock_service_1 = require("./userblock.service");
describe('Service: Userblock', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [userblock_service_1.UserblockService]
        });
    });
    it('should ...', testing_1.inject([userblock_service_1.UserblockService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=userblock.service.spec.js.map