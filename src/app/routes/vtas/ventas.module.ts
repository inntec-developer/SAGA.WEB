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




const routes: Routes = [
    { path: 'prospecto', component: ProspectoComponent },
    { path: 'requisicion', component: RequisicionComponent },
    { path: 'requisicionNueva/:IdDamfo/:IdDireccion', component: RequisicionNuevaComponent}
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
        MatToolbarModule, MatTooltipModule, MatOptionModule, NgxSpinnerModule, ToasterModule
    ],
    providers: [ColorPickerService, { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }, ToasterService ],
    declarations: [
        ProspectoComponent,
        RequisicionComponent,
        RequisicionNuevaComponent,
        DtDamfoComponent,
        DialogdamfoComponent,
        DireccionautoComponent
    ],
    entryComponents: [DialogdamfoComponent],
    exports: [
        RouterModule
    ]
})

export class VentaModule { }
