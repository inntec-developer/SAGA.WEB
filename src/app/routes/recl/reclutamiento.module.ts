// Librerias necesarias para el modulo.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { SelectModule } from 'ng2-select';
import { TextMaskModule } from 'angular2-text-mask';
import { TagInputModule } from 'ngx-chips';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';
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
import {PaginatorModule} from 'primeng/paginator';

import { NgxSpinnerModule } from 'ngx-spinner';
import { Damfo290Component } from './damfo290/damfo290.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { BusquedaComponent } from './candidatos/busqueda/busqueda.component';
import { PaisComponent } from './candidatos/busqueda/pais/pais.component';
import { EstadoComponent } from './candidatos/busqueda/estado/estado.component';
import { MunicipioComponent } from './candidatos/busqueda/municipio/municipio.component';
import { ColoniaComponent } from './candidatos/busqueda/colonia/colonia.component';
import { AreaExpComponent } from './candidatos/busqueda/area-exp/area-exp.component';
import { CpComponent } from './candidatos/busqueda/cp/cp.component';
import { GeneroComponent } from './candidatos/busqueda/genero/genero.component';
import { EdadComponent } from './candidatos/busqueda/edad/edad.component';
import { ReubicacionComponent } from './candidatos/busqueda/reubicacion/reubicacion.component';
import { PcondiscapacidadComponent } from './candidatos/busqueda/pcondiscapacidad/pcondiscapacidad.component';
import { TplicenciaComponent } from './candidatos/busqueda/tplicencia/tplicencia.component';
import { VehpropioComponent } from './candidatos/busqueda/vehpropio/vehpropio.component';
import { NivestudiosComponent } from './candidatos/busqueda/nivestudios/nivestudios.component';
import { IdiomasComponent } from './candidatos/busqueda/idiomas/idiomas.component';
import { PerfilComponent } from './candidatos/busqueda/perfil/perfil.component';
import { DtVacantesComponent } from './candidatos/dt-vacantes/dt-vacantes.component';
import { DtCandidatosComponent } from './candidatos/dt-candidatos/dt-candidatos.component';
import { DialogcandidatosComponent } from './candidatos/dt-candidatos/dialogcandidatos/dialogcandidatos.component';
import { DisenadorVacanteComponent } from './vacantes/disenador-vacante/disenador-vacante.component';
import {ToasterModule,ToasterService} from 'angular2-toaster';

//Providers
import { getSpanishPaginatorIntl } from '../../core/translator/config-paginator/config-paginator.component';


const routes: Routes = [
    {path: '290', component: Damfo290Component},
    {path: 'candidatos', component: CandidatosComponent},
    {path: 'vacantes', component: VacantesComponent},
    {path: 'disenador', component: DisenadorVacanteComponent},
    { path: 'configuracionVacante/:Requi', component: DisenadorVacanteComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SelectModule, ColorPickerModule, TextMaskModule,
        TagInputModule, CustomFormsModule, FileUploadModule,
        ImageCropperModule, FormsModule, ReactiveFormsModule,
        CommonModule, HttpClientModule, HttpModule,
        MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
        MatCardModule, MatCheckboxModule, MatChipsModule,
        MatStepperModule, MatDatepickerModule, MatDialogModule,
        MatDividerModule, MatExpansionModule, MatGridListModule,
        MatIconModule, MatInputModule,   MatListModule,
        MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
        MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
        MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
        MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,
        MatToolbarModule, MatTooltipModule, MatOptionModule, MatDialogModule, PaginatorModule,
        ToasterModule,NgxSpinnerModule ],
    providers: [ColorPickerService, { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() },ToasterService],
    declarations: [ Damfo290Component, CandidatosComponent, VacantesComponent, BusquedaComponent, PaisComponent, EstadoComponent, MunicipioComponent, ColoniaComponent, AreaExpComponent, CpComponent, GeneroComponent, EdadComponent, ReubicacionComponent, PcondiscapacidadComponent, TplicenciaComponent, VehpropioComponent, NivestudiosComponent, IdiomasComponent, PerfilComponent, DtVacantesComponent, DtCandidatosComponent, DialogcandidatosComponent, DisenadorVacanteComponent],
    entryComponents: [
       DialogcandidatosComponent],
    exports: [ RouterModule ]
})

export class ReclutamientoModule { }
