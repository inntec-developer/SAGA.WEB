import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
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
         MatToolbarModule, MatTooltipModule, MatOptionModule
       } from '@angular/material';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';



import { ProspectoComponent } from './prospectos/prospecto.component';
import { RequisicionComponent } from './requisiciones/requisicion.component';
import { RequisicionNuevaComponent } from './requisiciones/components/requisicion-nueva/requisicion-nueva.component';
import { DtDamfoComponent } from './requisiciones/components/dt-damfo/dt-damfo.component';


const routes: Routes = [
    { path: 'prospecto', component: ProspectoComponent },
    { path: 'requisicion', component: RequisicionComponent },
    { path: 'requisicionNueva/:id', component: RequisicionNuevaComponent}
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
        MatToolbarModule, MatTooltipModule, MatOptionModule
    ],
    providers: [],
    declarations: [
        ProspectoComponent,
        RequisicionComponent,
        RequisicionNuevaComponent,
        DtDamfoComponent
    ],
    exports: [
        RouterModule
    ]
})

export class VentaModule { }
