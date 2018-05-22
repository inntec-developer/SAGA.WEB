"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layout_component_1 = require("../layout/layout.component");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var recover_component_1 = require("./pages/recover/recover.component");
var lock_component_1 = require("./pages/lock/lock.component");
var maintenance_component_1 = require("./pages/maintenance/maintenance.component");
var error404_component_1 = require("./pages/error404/error404.component");
var error500_component_1 = require("./pages/error500/error500.component");
exports.routes = [
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'reclutamiento', loadChildren: './recl/reclutamiento.module#ReclutamientoModule' },
            { path: 'ventas', loadChildren: './vtas/ventas.module#VentaModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'recover', component: recover_component_1.RecoverComponent },
    { path: 'lock', component: lock_component_1.LockComponent },
    { path: 'maintenance', component: maintenance_component_1.MaintenanceComponent },
    { path: '404', component: error404_component_1.Error404Component },
    { path: '500', component: error500_component_1.Error500Component },
    // Not found
    { path: '**', redirectTo: '404' }
];
//# sourceMappingURL=routes.js.map