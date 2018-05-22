"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var core_1 = require("@ngx-translate/core");
var core_module_1 = require("./core/core.module");
var layout_module_1 = require("./layout/layout.module");
var shared_module_1 = require("./shared/shared.module");
var routes_module_1 = require("./routes/routes.module");
var common_1 = require("@angular/common");
describe('App: SAGA', function () {
    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                core_1.TranslateModule.forRoot(),
                core_module_1.CoreModule,
                layout_module_1.LayoutModule,
                shared_module_1.SharedModule,
                routes_module_1.RoutesModule
            ],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ]
        });
    });
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map