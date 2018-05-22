"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var offsidebar_component_1 = require("./offsidebar.component");
var core_1 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var settings_service_1 = require("../../core/settings/settings.service");
var themes_service_1 = require("../../core/themes/themes.service");
var translator_service_1 = require("../../core/translator/translator.service");
var shared_module_1 = require("../../shared/shared.module");
var app_module_1 = require("../../app.module");
describe('Component: Offsidebar', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                core_1.TranslateModule.forRoot({
                    loader: {
                        provide: core_1.TranslateLoader,
                        useFactory: (app_module_1.createTranslateLoader),
                        deps: [http_1.HttpClient]
                    }
                }),
                http_1.HttpClientModule,
                shared_module_1.SharedModule
            ],
            providers: [settings_service_1.SettingsService, themes_service_1.ThemesService, translator_service_1.TranslatorService]
        }).compileComponents();
    });
    it('should create an instance', testing_1.async(testing_1.inject([settings_service_1.SettingsService, themes_service_1.ThemesService, translator_service_1.TranslatorService], function (settingsService, themesService, translatorService) {
        var component = new offsidebar_component_1.OffsidebarComponent(settingsService, themesService, translatorService);
        expect(component).toBeTruthy();
    })));
});
//# sourceMappingURL=offsidebar.component.spec.js.map