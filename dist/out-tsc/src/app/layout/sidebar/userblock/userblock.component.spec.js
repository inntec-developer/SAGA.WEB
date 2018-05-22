"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var userblock_component_1 = require("./userblock.component");
var userblock_service_1 = require("./userblock.service");
describe('Component: Userblock', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [userblock_service_1.UserblockService]
        }).compileComponents();
    });
    it('should create an instance', testing_1.async(testing_1.inject([userblock_service_1.UserblockService], function (userBlockService) {
        var component = new userblock_component_1.UserblockComponent(userBlockService);
        expect(component).toBeTruthy();
    })));
});
//# sourceMappingURL=userblock.component.spec.js.map