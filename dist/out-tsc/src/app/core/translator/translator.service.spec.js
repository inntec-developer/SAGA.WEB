"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var translator_service_1 = require("./translator.service");
var app_module_1 = require("../../app.module");
describe('Service: Translator', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                http_1.HttpClientModule,
                core_1.TranslateModule.forRoot({
                    loader: {
                        provide: core_1.TranslateLoader,
                        useFactory: (app_module_1.createTranslateLoader),
                        deps: [http_1.HttpClient]
                    }
                })
            ],
            providers: [translator_service_1.TranslatorService]
        });
    });
    it('should ...', testing_1.inject([translator_service_1.TranslatorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=translator.service.spec.js.map