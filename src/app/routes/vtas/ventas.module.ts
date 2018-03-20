import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2TableModule, NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/Http';
import { HttpClientModule } from '@angular/common/http';
import { ProspectoComponent } from './prospectos/prospecto.component';
import { RequisicionComponent } from './requisiciones/requisicion.component';
import { RequisicionNuevaComponent } from './requisiciones/components/requisicion-nueva/requisicion-nueva.component';


const routes: Routes = [
    { path: 'prospecto', component: ProspectoComponent },
    { path: 'requisicion', component: RequisicionComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        Ng2TableModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [],
    declarations: [
        ProspectoComponent,
        RequisicionComponent,
        RequisicionNuevaComponent
    ],
    exports: [
        RouterModule
    ]
})

export class VentaModule { }
