"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var themes_service_1 = require("./themes.service");
describe('Service: Themes', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [themes_service_1.ThemesService]
        });
    });
    it('should ...', testing_1.inject([themes_service_1.ThemesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=themes.service.spec.js.map