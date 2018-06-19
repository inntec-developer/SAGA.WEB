import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsignarRequisicionComponent } from './../../components/asignar-requisicion/asignar-requisicion.component';
import { ButtonCancelComponent } from './../../components/buttons/button-cancel/button-cancel.component';
import { ButtonDeleteComponent } from './../../components/buttons/button-delete/button-delete.component';
import { ButtonEditComponent } from './../../components/buttons/button-edit/button-edit.component';
import { ButtonSaveComponent } from './../../components/buttons/button-save/button-save.component';
import { ButtonViewComponent } from './../../components/buttons/button-view/button-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgxSelectModule } from 'ngx-select-ex'

const routes: Routes = [
    { path: '', component: HomeComponent},
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxSelectModule,
        FormsModule,
        CommonModule
        
    ],
    declarations: [
        HomeComponent, 
        AsignarRequisicionComponent,
        ButtonSaveComponent, 
        ButtonDeleteComponent, 
        ButtonCancelComponent, 
        ButtonEditComponent,
        ButtonViewComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }