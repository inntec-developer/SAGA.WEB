"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var ng2_dnd_1 = require("ng2-dnd");
var material_1 = require("@angular/material");
var ng2_select_1 = require("ng2-select");
var http_2 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng2_validation_1 = require("ng2-validation");
var ng2_file_upload_1 = require("ng2-file-upload");
var ng2_img_cropper_1 = require("ng2-img-cropper");
var datepicker_1 = require("@angular/material/datepicker");
;
var ng2_table_1 = require("ng2-table/ng2-table");
var pagination_1 = require("ng2-bootstrap/pagination"); // from ng2-bootstrap
var checkbox_1 = require("@angular/material/checkbox");
//Servicios
//Componentes
var addadmin_component_1 = require("./admin/addadmin.component");
var add_persona_component_1 = require("./add-persona/add-persona.component");
var dt_personas_component_1 = require("./add-persona/dt-personas/dt-personas.component");
var add_grupo_component_1 = require("./add-grupo/add-grupo.component");
var add_roles_component_1 = require("./add-roles/add-roles.component");
var crop_img_component_1 = require("./crop-img/crop-img.component");
var rol_grupo_component_1 = require("./rol-grupo/rol-grupo.component");
var routes = [
    { path: 'roles', component: add_roles_component_1.AddRolesComponent },
    { path: 'agregar', component: add_persona_component_1.AddPersonaComponent },
    { path: 'grupo', component: addadmin_component_1.AddadminComponent },
    { path: 'grupoAdd', component: add_grupo_component_1.AddGrupoComponent },
    { path: 'rol', component: rol_grupo_component_1.RolGrupoComponent }
];
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                http_1.HttpClientModule,
                http_2.HttpModule,
                common_1.CommonModule,
                ng2_dnd_1.DndModule.forRoot(),
                material_1.MatSelectModule,
                ng2_select_1.SelectModule,
                material_1.MatNativeDateModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng2_validation_1.CustomFormsModule,
                datepicker_1.MatDatepickerModule,
                ng2_file_upload_1.FileUploadModule,
                ng2_img_cropper_1.ImageCropperModule,
                ng2_table_1.Ng2TableModule,
                pagination_1.PaginationModule.forRoot(),
                checkbox_1.MatCheckboxModule
            ],
            declarations: [
                addadmin_component_1.AddadminComponent,
                add_persona_component_1.AddPersonaComponent,
                dt_personas_component_1.DtPersonasComponent,
                add_grupo_component_1.AddGrupoComponent,
                add_roles_component_1.AddRolesComponent,
                crop_img_component_1.CropImgComponent,
                rol_grupo_component_1.RolGrupoComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map