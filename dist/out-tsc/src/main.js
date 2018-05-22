"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./vendor.ts");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var p = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
p.then(function () { window.appBootstrap && window.appBootstrap(); });
// .catch(err => console.error(err));
//# sourceMappingURL=main.js.map