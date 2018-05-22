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
var shared_module_1 = require("../../shared/shared.module");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var ngx_color_picker_1 = require("ngx-color-picker");
var material_1 = require("@angular/material");
var ngx_spinner_1 = require("ngx-spinner");
var angular2_toaster_1 = require("angular2-toaster");
var ng2_select_1 = require("ng2-select");
//Providers
var config_paginator_component_1 = require("../../core/translator/config-paginator/config-paginator.component");
//Componentes
var prospecto_component_1 = require("./prospectos/prospecto.component");
var requisicion_component_1 = require("./requisiciones/requisicion.component");
var requisicion_nueva_component_1 = require("./requisiciones/components/requisicion-nueva/requisicion-nueva.component");
var dt_damfo_component_1 = require("./requisiciones/components/dt-damfo/dt-damfo.component");
var dialogdamfo_component_1 = require("./requisiciones/components/dialogdamfo/dialogdamfo.component");
var direccionauto_component_1 = require("./requisiciones/components/direccionauto/direccionauto.component");
var viewdamfo_component_1 = require("./requisiciones/components/viewdamfo/viewdamfo.component");
var dt_direccion_component_1 = require("./requisiciones/components/dt-direccion/dt-direccion.component");
var dt_telefonos_component_1 = require("./requisiciones/components/dt-telefonos/dt-telefonos.component");
var dt_contactos_component_1 = require("./requisiciones/components/dt-contactos/dt-contactos.component");
var dt_horarios_component_1 = require("./requisiciones/components/dt-horarios/dt-horarios.component");
var dt_psicometrias_damsa_component_1 = require("./requisiciones/components/dt-psicometrias-damsa/dt-psicometrias-damsa.component");
var dt_psicometrias_cliente_component_1 = require("./requisiciones/components/dt-psicometrias-cliente/dt-psicometrias-cliente.component");
var dt_beneficios_component_1 = require("./requisiciones/components/dt-beneficios/dt-beneficios.component");
var dt_competencia_cardinal_component_1 = require("./requisiciones/components/competencias/dt-competencia-cardinal/dt-competencia-cardinal.component");
var dt_competencia_area_component_1 = require("./requisiciones/components/competencias/dt-competencia-area/dt-competencia-area.component");
var dt_competencia_gerencial_component_1 = require("./requisiciones/components/competencias/dt-competencia-gerencial/dt-competencia-gerencial.component");
var dt_crear_requisicion_component_1 = require("./requisiciones/components/dt-crear-requisicion/dt-crear-requisicion.component");
var dt_requisicion_component_1 = require("./requisiciones/components/dt-requisicion/dt-requisicion.component");
var documentos_damsa_component_1 = require("./requisiciones/components/documentos-damsa/documentos-damsa.component");
var documentos_cliente_component_1 = require("./requisiciones/components/documentos-cliente/documentos-cliente.component");
var prestaciones_ley_component_1 = require("./requisiciones/components/prestaciones-ley/prestaciones-ley.component");
var prestaciones_cliente_component_1 = require("./requisiciones/components/prestaciones-cliente/prestaciones-cliente.component");
var actividades_component_1 = require("./requisiciones/components/actividades/actividades.component");
var observaciones_component_1 = require("./requisiciones/components/observaciones/observaciones.component");
var procesos_component_1 = require("./requisiciones/components/procesos/procesos.component");
var view_requisicion_component_1 = require("./requisiciones/components/view-requisicion/view-requisicion.component");
var view_info_requi_component_1 = require("./requisiciones/components/view-info-requi/view-info-requi.component");
var update_requisicion_component_1 = require("./requisiciones/components/update-requisicion/update-requisicion.component");
var view_cuerpo_requi_component_1 = require("./requisiciones/components/view-cuerpo-requi/view-cuerpo-requi.component");
var update_info_requi_component_1 = require("./requisiciones/components/update-info-requi/update-info-requi.component");
var routes = [
    { path: 'prospecto', component: prospecto_component_1.ProspectoComponent },
    { path: 'requisicion', component: requisicion_component_1.RequisicionComponent },
    { path: 'crearRequisicion', component: dt_crear_requisicion_component_1.DtCrearRequisicionComponent },
    { path: 'requisicionNueva/:IdDamfo/:IdDireccion', component: requisicion_nueva_component_1.RequisicionNuevaComponent },
    { path: 'visualizarDamfo290/:IdDamfo', component: viewdamfo_component_1.ViewdamfoComponent },
    { path: 'visualizarRequisicion/:IdRequi/:Folio', component: view_requisicion_component_1.ViewRequisicionComponent },
    { path: 'edicionRequisicion/:IdRequi/:Folio', component: update_requisicion_component_1.UpdateRequisicionComponent },
];
var VentaModule = (function () {
    function VentaModule() {
    }
    VentaModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                http_1.HttpModule,
                http_2.HttpClientModule,
                material_1.MatAutocompleteModule, material_1.MatButtonModule, material_1.MatButtonToggleModule,
                material_1.MatCardModule, material_1.MatCheckboxModule, material_1.MatChipsModule,
                material_1.MatStepperModule, material_1.MatDatepickerModule, material_1.MatDialogModule,
                material_1.MatDividerModule, material_1.MatExpansionModule, material_1.MatGridListModule,
                material_1.MatIconModule, material_1.MatInputModule, material_1.MatListModule,
                material_1.MatMenuModule, material_1.MatNativeDateModule, material_1.MatPaginatorModule, material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule, material_1.MatRadioModule, material_1.MatRippleModule,
                material_1.MatSelectModule, material_1.MatSidenavModule, material_1.MatSliderModule, material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule, material_1.MatSortModule, material_1.MatTableModule, material_1.MatTabsModule,
                material_1.MatToolbarModule, material_1.MatTooltipModule, material_1.MatOptionModule, ngx_spinner_1.NgxSpinnerModule, angular2_toaster_1.ToasterModule,
                ng2_select_1.SelectModule
            ],
            providers: [ngx_color_picker_1.ColorPickerService, { provide: material_1.MatPaginatorIntl, useValue: config_paginator_component_1.getSpanishPaginatorIntl() }, angular2_toaster_1.ToasterService],
            declarations: [
                prospecto_component_1.ProspectoComponent,
                requisicion_component_1.RequisicionComponent,
                requisicion_nueva_component_1.RequisicionNuevaComponent,
                dt_damfo_component_1.DtDamfoComponent,
                dialogdamfo_component_1.DialogdamfoComponent,
                direccionauto_component_1.DireccionautoComponent,
                viewdamfo_component_1.ViewdamfoComponent,
                dt_direccion_component_1.DtDireccionComponent,
                dt_telefonos_component_1.DtTelefonosComponent,
                dt_damfo_component_1.DtDamfoComponent,
                dt_contactos_component_1.DtContactosComponent,
                dt_horarios_component_1.DtHorariosComponent,
                dt_psicometrias_damsa_component_1.DtPsicometriasDamsaComponent,
                dt_psicometrias_cliente_component_1.DtPsicometriasClienteComponent,
                dt_beneficios_component_1.DtBeneficiosComponent,
                dt_competencia_cardinal_component_1.DtCompetenciaCardinalComponent,
                dt_competencia_area_component_1.DtCompetenciaAreaComponent,
                dt_competencia_gerencial_component_1.DtCompetenciaGerencialComponent,
                dt_crear_requisicion_component_1.DtCrearRequisicionComponent,
                dt_requisicion_component_1.DtRequisicionComponent,
                documentos_damsa_component_1.DocumentosDamsaComponent,
                documentos_cliente_component_1.DocumentosClienteComponent,
                prestaciones_ley_component_1.PrestacionesLeyComponent,
                prestaciones_cliente_component_1.PrestacionesClienteComponent,
                actividades_component_1.ActividadesComponent,
                observaciones_component_1.ObservacionesComponent,
                procesos_component_1.ProcesosComponent,
                view_requisicion_component_1.ViewRequisicionComponent,
                view_info_requi_component_1.ViewInforRequiComponent,
                update_requisicion_component_1.UpdateRequisicionComponent,
                view_cuerpo_requi_component_1.ViewCuerpoRequiComponent,
                update_info_requi_component_1.UpdateInfoRequiComponent,
            ],
            entryComponents: [dialogdamfo_component_1.DialogdamfoComponent],
            exports: [
                router_1.RouterModule
            ]
        })
    ], VentaModule);
    return VentaModule;
}());
exports.VentaModule = VentaModule;
//# sourceMappingURL=ventas.module.js.map