"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var footer_component_1 = require("./footer.component");
var settings_service_1 = require("../../core/settings/settings.service");
describe('Component: Footer', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [settings_service_1.SettingsService]
        }).compileComponents();
    });
    it('should create an instance', testing_1.async(testing_1.inject([settings_service_1.SettingsService], function (settingsService) {
        var component = new footer_component_1.FooterComponent(settingsService);
        expect(component).toBeTruthy();
    })));
});
//# sourceMappingURL=footer.component.spec.js.map