"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var header_component_1 = require("./header.component");
var userblock_service_1 = require("../sidebar/userblock/userblock.service");
var settings_service_1 = require("../../core/settings/settings.service");
var menu_service_1 = require("../../core/menu/menu.service");
describe('Component: Header', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [menu_service_1.MenuService, userblock_service_1.UserblockService, settings_service_1.SettingsService]
        }).compileComponents();
    });
    it('should create an instance', testing_1.async(testing_1.inject([menu_service_1.MenuService, userblock_service_1.UserblockService, settings_service_1.SettingsService], function (menuService, userblockService, settingsService) {
        var component = new header_component_1.HeaderComponent(menuService, userblockService, settingsService);
        expect(component).toBeTruthy();
    })));
});
//# sourceMappingURL=header.component.spec.js.map