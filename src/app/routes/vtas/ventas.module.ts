import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
         MatCardModule, MatCheckboxModule, MatChipsModule,
         MatDatepickerModule, MatDialogModule, MatDividerModule,
         MatExpansionModule, MatGridListModule, MatIconModule,
         MatInputModule, MatListModule, MatMenuModule,
         MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
         MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
         MatSelectModule, MatSidenavModule, MatSliderModule,
         MatSlideToggleModule, MatSnackBarModule, MatSortModule,
         MatStepperModule, MatTableModule, MatTabsModule,
         MatToolbarModule, MatTooltipModule, MatOptionModule, MatPaginatorIntl
       } from '@angular/material';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { SelectModule } from 'ng2-select';

//Providers
import { getSpanishPaginatorIntl } from '../../core/translator/config-paginator/config-paginator.component';

//Componentes
import { ProspectoComponent } from './prospectos/prospecto.component';
import { RequisicionComponent } from './requisiciones/requisicion.component';
import { RequisicionNuevaComponent } from './requisiciones/components/requisicion-nueva/requisicion-nueva.component';
import { DtDamfoComponent } from './requisiciones/components/dt-damfo/dt-damfo.component';
import { DialogdamfoComponent } from './requisiciones/components/dialogdamfo/dialogdamfo.component';
import { DireccionautoComponent } from './requisiciones/components/direccionauto/direccionauto.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewdamfoComponent } from './requisiciones/components/viewdamfo/viewdamfo.component';
import { DtDireccionComponent } from './requisiciones/components/dt-direccion/dt-direccion.component';
import { DtTelefonosComponent } from './requisiciones/components/dt-telefonos/dt-telefonos.component';
import { DtContactosComponent } from './requisiciones/components/dt-contactos/dt-contactos.component';
import { DtHorariosComponent } from './requisiciones/components/dt-horarios/dt-horarios.component';
import { DtPsicometriasDamsaComponent } from './requisiciones/components/dt-psicometrias-damsa/dt-psicometrias-damsa.component';
import { DtPsicometriasClienteComponent } from './requisiciones/components/dt-psicometrias-cliente/dt-psicometrias-cliente.component';
import { DtBeneficiosComponent } from './requisiciones/components/dt-beneficios/dt-beneficios.component';
import { DtCompetenciaCardinalComponent } from './requisiciones/components/competencias/dt-competencia-cardinal/dt-competencia-cardinal.component';
import { DtCompetenciaAreaComponent } from './requisiciones/components/competencias/dt-competencia-area/dt-competencia-area.component';
import { DtCompetenciaGerencialComponent } from './requisiciones/components/competencias/dt-competencia-gerencial/dt-competencia-gerencial.component';
import { DtCrearRequisicionComponent } from './requisiciones/components/dt-crear-requisicion/dt-crear-requisicion.component';
import { DtRequisicionComponent } from './requisiciones/components/dt-requisicion/dt-requisicion.component';
import { DocumentosDamsaComponent } from './requisiciones/components/documentos-damsa/documentos-damsa.component';
import { DocumentosClienteComponent } from './requisiciones/components/documentos-cliente/documentos-cliente.component';
import { PrestacionesLeyComponent } from './requisiciones/components/prestaciones-ley/prestaciones-ley.component';
import { PrestacionesClienteComponent } from './requisiciones/components/prestaciones-cliente/prestaciones-cliente.component';
import { ActividadesComponent } from './requisiciones/components/actividades/actividades.component';
import { ObservacionesComponent } from './requisiciones/components/observaciones/observaciones.component';
import { ProcesosComponent } from './requisiciones/components/procesos/procesos.component';
import { ViewRequisicionComponent } from './requisiciones/components/view-requisicion/view-requisicion.component';
import { GruposUsuariosComponent } from './requisiciones/components/grupos-usuarios/grupos-usuarios.component';


const routes: Routes = [
    { path: 'prospecto', component: ProspectoComponent },
    { path: 'requisicion', component: RequisicionComponent },
    { path: 'crearRequisicion', component: DtCrearRequisicionComponent },
    { path: 'requisicionNueva/:IdDamfo/:IdDireccion', component: RequisicionNuevaComponent },
    { path: 'visualizarDamfo290/:IdDamfo', component: ViewdamfoComponent },
    { path: 'visualizarRequisicion/:IdRequi', component: ViewRequisicionComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        HttpModule,
        HttpClientModule,
        MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
        MatCardModule, MatCheckboxModule, MatChipsModule,
        MatStepperModule, MatDatepickerModule, MatDialogModule,
        MatDividerModule, MatExpansionModule, MatGridListModule,
        MatIconModule, MatInputModule,   MatListModule,
        MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
        MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
        MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
        MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,
        MatToolbarModule, MatTooltipModule, MatOptionModule, NgxSpinnerModule, ToasterModule,
        SelectModule
    ],
    providers: [ColorPickerService, { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }, ToasterService ],
    declarations: [
        ProspectoComponent,
        RequisicionComponent,
        RequisicionNuevaComponent,
        DtDamfoComponent,
        DialogdamfoComponent,
        DireccionautoComponent,
        ViewdamfoComponent,
        DtDireccionComponent,
        DtTelefonosComponent,
        DtDamfoComponent,
        DtContactosComponent,
        DtHorariosComponent,
        DtPsicometriasDamsaComponent,
        DtPsicometriasClienteComponent,
        DtBeneficiosComponent,
        DtCompetenciaCardinalComponent,
        DtCompetenciaAreaComponent,
        DtCompetenciaGerencialComponent,
        DtCrearRequisicionComponent,
        DtRequisicionComponent,
        DocumentosDamsaComponent,
        DocumentosClienteComponent,
        PrestacionesLeyComponent,
        PrestacionesClienteComponent,
        ActividadesComponent,
        ObservacionesComponent,
        ProcesosComponent,
        ViewRequisicionComponent,
        GruposUsuariosComponent,
    ],
    entryComponents: [DialogdamfoComponent],
    exports: [
        RouterModule
    ]
})

export class VentaModule { }
