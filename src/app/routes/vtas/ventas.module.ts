import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { SharedModule } from '../../shared/shared.module';

import { ProspectoComponent } from './prospectos/prospecto.component';
import { RequisicionComponent } from './requisiciones/requisicion.component';


const routes: Routes = [
    { path: 'prospecto', component: ProspectoComponent },
    { path: 'requisicion', component: RequisicionComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        Ng2TableModule
    ],
    providers: [],
    declarations: [
        ProspectoComponent,
        RequisicionComponent
    ],
    exports: [
        RouterModule
    ]
})

export class VentaModule { }
