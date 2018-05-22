"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var sidebar_component_1 = require("./sidebar.component");
var router_1 = require("@angular/router");
var menu_service_1 = require("../../core/menu/menu.service");
var settings_service_1 = require("../../core/settings/settings.service");
describe('Component: Sidebar', function () {
    var mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                menu_service_1.MenuService,
                settings_service_1.SettingsService,
                { provide: router_1.Router, useValue: mockRouter }
            ]
        }).compileComponents();
    });
    it('should create an instance', testing_1.async(testing_1.inject([menu_service_1.MenuService, settings_service_1.SettingsService, router_1.Router], function (menuService, settingsService, router) {
        var component = new sidebar_component_1.SidebarComponent(menuService, settingsService, router);
        expect(component).toBeTruthy();
    })));
});
//# sourceMappingURL=sidebar.component.spec.js.map