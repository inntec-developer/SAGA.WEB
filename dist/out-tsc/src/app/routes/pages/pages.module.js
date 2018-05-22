"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var shared_module_1 = require("../../shared/shared.module");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var recover_component_1 = require("./recover/recover.component");
var lock_component_1 = require("./lock/lock.component");
var maintenance_component_1 = require("./maintenance/maintenance.component");
var error404_component_1 = require("./error404/error404.component");
var error500_component_1 = require("./error500/error500.component");
//Use this routes definition in case you want to make them lazy-loaded */
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'recover', component: recover_component_1.RecoverComponent },
    { path: 'lock', component: lock_component_1.LockComponent },
    { path: 'maintenance', component: maintenance_component_1.MaintenanceComponent },
    { path: '404', component: error404_component_1.Error404Component },
    { path: '500', component: error500_component_1.Error500Component },
];
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                http_1.HttpModule
            ],
            declarations: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                recover_component_1.RecoverComponent,
                lock_component_1.LockComponent,
                maintenance_component_1.MaintenanceComponent,
                error404_component_1.Error404Component,
                error500_component_1.Error500Component
            ],
            exports: [
                router_1.RouterModule,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                recover_component_1.RecoverComponent,
                lock_component_1.LockComponent,
                maintenance_component_1.MaintenanceComponent,
                error404_component_1.Error404Component,
                error500_component_1.Error500Component
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map