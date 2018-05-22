"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var settings_service_1 = require("./settings.service");
describe('Service: Settings', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [settings_service_1.SettingsService]
        });
    });
    it('should ...', testing_1.inject([settings_service_1.SettingsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=settings.service.spec.js.map