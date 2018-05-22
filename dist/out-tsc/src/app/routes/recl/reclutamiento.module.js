"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Librerias necesarias para el modulo.
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var ngx_color_picker_1 = require("ngx-color-picker");
var ng2_select_1 = require("ng2-select");
var angular2_text_mask_1 = require("angular2-text-mask");
var ngx_chips_1 = require("ngx-chips");
var ng2_validation_1 = require("ng2-validation");
var ng2_file_upload_1 = require("ng2-file-upload");
var ng2_img_cropper_1 = require("ng2-img-cropper");
var material_1 = require("@angular/material");
var paginator_1 = require("primeng/paginator");
var damfo290_component_1 = require("./damfo290/damfo290.component");
var candidatos_component_1 = require("./candidatos/candidatos.component");
var vacantes_component_1 = require("./vacantes/vacantes.component");
var busqueda_component_1 = require("./candidatos/busqueda/busqueda.component");
var pais_component_1 = require("./candidatos/busqueda/pais/pais.component");
var estado_component_1 = require("./candidatos/busqueda/estado/estado.component");
var municipio_component_1 = require("./candidatos/busqueda/municipio/municipio.component");
var colonia_component_1 = require("./candidatos/busqueda/colonia/colonia.component");
var area_exp_component_1 = require("./candidatos/busqueda/area-exp/area-exp.component");
var cp_component_1 = require("./candidatos/busqueda/cp/cp.component");
var genero_component_1 = require("./candidatos/busqueda/genero/genero.component");
var edad_component_1 = require("./candidatos/busqueda/edad/edad.component");
var reubicacion_component_1 = require("./candidatos/busqueda/reubicacion/reubicacion.component");
var pcondiscapacidad_component_1 = require("./candidatos/busqueda/pcondiscapacidad/pcondiscapacidad.component");
var tplicencia_component_1 = require("./candidatos/busqueda/tplicencia/tplicencia.component");
var vehpropio_component_1 = require("./candidatos/busqueda/vehpropio/vehpropio.component");
var nivestudios_component_1 = require("./candidatos/busqueda/nivestudios/nivestudios.component");
var idiomas_component_1 = require("./candidatos/busqueda/idiomas/idiomas.component");
var perfil_component_1 = require("./candidatos/busqueda/perfil/perfil.component");
var dt_vacantes_component_1 = require("./candidatos/dt-vacantes/dt-vacantes.component");
var dt_candidatos_component_1 = require("./candidatos/dt-candidatos/dt-candidatos.component");
var dialogcandidatos_component_1 = require("./candidatos/dt-candidatos/dialogcandidatos/dialogcandidatos.component");
var disenador_vacante_component_1 = require("./vacantes/disenador-vacante/disenador-vacante.component");
var angular2_toaster_1 = require("angular2-toaster");
//Providers
var config_paginator_component_1 = require("../../core/translator/config-paginator/config-paginator.component");
var routes = [
    { path: '290', component: damfo290_component_1.Damfo290Component },
    { path: 'candidatos', component: candidatos_component_1.CandidatosComponent },
    { path: 'vacantes', component: vacantes_component_1.VacantesComponent },
    { path: 'disenador', component: disenador_vacante_component_1.DisenadorVacanteComponent },
    { path: 'configuracionVacante/:Requi', component: disenador_vacante_component_1.DisenadorVacanteComponent }
];
var ReclutamientoModule = (function () {
    function ReclutamientoModule() {
    }
    ReclutamientoModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                ng2_select_1.SelectModule, ngx_color_picker_1.ColorPickerModule, angular2_text_mask_1.TextMaskModule,
                ngx_chips_1.TagInputModule, ng2_validation_1.CustomFormsModule, ng2_file_upload_1.FileUploadModule,
                ng2_img_cropper_1.ImageCropperModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                common_1.CommonModule, http_2.HttpClientModule, http_1.HttpModule,
                material_1.MatAutocompleteModule, material_1.MatButtonModule, material_1.MatButtonToggleModule,
                material_1.MatCardModule, material_1.MatCheckboxModule, material_1.MatChipsModule,
                material_1.MatStepperModule, material_1.MatDatepickerModule, material_1.MatDialogModule,
                material_1.MatDividerModule, material_1.MatExpansionModule, material_1.MatGridListModule,
                material_1.MatIconModule, material_1.MatInputModule, material_1.MatListModule,
                material_1.MatMenuModule, material_1.MatNativeDateModule, material_1.MatPaginatorModule, material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule, material_1.MatRadioModule, material_1.MatRippleModule,
                material_1.MatSelectModule, material_1.MatSidenavModule, material_1.MatSliderModule, material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule, material_1.MatSortModule, material_1.MatTableModule, material_1.MatTabsModule,
                material_1.MatToolbarModule, material_1.MatTooltipModule, material_1.MatOptionModule, material_1.MatDialogModule, paginator_1.PaginatorModule,
                angular2_toaster_1.ToasterModule
            ],
            providers: [ngx_color_picker_1.ColorPickerService, { provide: material_1.MatPaginatorIntl, useValue: config_paginator_component_1.getSpanishPaginatorIntl() }, angular2_toaster_1.ToasterService],
            declarations: [damfo290_component_1.Damfo290Component, candidatos_component_1.CandidatosComponent, vacantes_component_1.VacantesComponent, busqueda_component_1.BusquedaComponent, pais_component_1.PaisComponent, estado_component_1.EstadoComponent, municipio_component_1.MunicipioComponent, colonia_component_1.ColoniaComponent, area_exp_component_1.AreaExpComponent, cp_component_1.CpComponent, genero_component_1.GeneroComponent, edad_component_1.EdadComponent, reubicacion_component_1.ReubicacionComponent, pcondiscapacidad_component_1.PcondiscapacidadComponent, tplicencia_component_1.TplicenciaComponent, vehpropio_component_1.VehpropioComponent, nivestudios_component_1.NivestudiosComponent, idiomas_component_1.IdiomasComponent, perfil_component_1.PerfilComponent, dt_vacantes_component_1.DtVacantesComponent, dt_candidatos_component_1.DtCandidatosComponent, dialogcandidatos_component_1.DialogcandidatosComponent, disenador_vacante_component_1.DisenadorVacanteComponent],
            entryComponents: [
                dialogcandidatos_component_1.DialogcandidatosComponent
            ],
            exports: [router_1.RouterModule]
        })
    ], ReclutamientoModule);
    return ReclutamientoModule;
}());
exports.ReclutamientoModule = ReclutamientoModule;
//# sourceMappingURL=reclutamiento.module.js.map