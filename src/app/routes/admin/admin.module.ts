
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { MatSelectModule, MatIconModule, MatInputModule, MatNativeDateModule, MatTooltipModule } from '@angular/material';
import {SelectModule} from 'ng2-select';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { AgGridModule } from 'ag-grid-angular/main';
import {NgxDatatableModule} from '@swimlane/ngx-datatable'
import {MatDialogModule} from '@angular/material/dialog';
import { ModalModule, PopoverModule } from 'ngx-bootstrap';

//Servicios


//Componentes
import { AddadminComponent } from './admin/addadmin.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { AddGrupoComponent } from './add-grupo/add-grupo.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { RolGrupoComponent } from './rol-grupo/rol-grupo.component';
import { UploadImgsComponent } from './upload-imgs/upload-imgs.component';
import { RollsStructComponent } from './rolls-struct/rolls-struct.component';
import { RegistroComponent } from './registro/registro.component';
import { PagesModule } from './../pages/pages.module';
import {ComponentsModule} from './../../components/components.module';
import { GridRolesComponent } from './add-roles/grid-roles/grid-roles.component';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
    { path: 'roles', component: AddRolesComponent, data: {'componente':'Roles'} },
    { path: 'agregar', component: AddPersonaComponent, data: {'componente':'Usuarios'} },
    { path: 'grupo', component: AddadminComponent, data: {'componente':'Usuarios a grupos'} },
    { path: 'grupoAdd', component: AddGrupoComponent, data: {'componente':'Grupos'} },
    { path: 'rol', component: RolGrupoComponent, data: {'componente':'Grupos a roles'} },
    { path: 'privilegios', component: RollsStructComponent, data: {'componente':'Privilegios'}},
    { path: 'GridRoles', component: GridRolesComponent },
    { path: 'registro', component: RegistroComponent}

];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        HttpModule,
        CommonModule,
        DndModule.forRoot(),
        MatSelectModule,
        SelectModule,
        MatNativeDateModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        MatDatepickerModule,
        FileUploadModule,
        ImageCropperModule,
        Ng2TableModule,
        MatCheckboxModule,
        AgGridModule,
        NgxDatatableModule, 
        MatDialogModule, 
        MatTooltipModule,
        PagesModule,
        ComponentsModule,
        //ModalModule.forRoot(),
        PopoverModule.forRoot(),
        SharedModule       
      ],
    declarations:
    [
      AddadminComponent,
      AddPersonaComponent,
      AddGrupoComponent,
      AddRolesComponent,
      RolGrupoComponent,
      UploadImgsComponent,
      RollsStructComponent,
      RegistroComponent,
      GridRolesComponent 

    ],
    exports: [
        RouterModule,
        AddPersonaComponent
    ], 
    providers: []
})

export class AdminModule {
  constructor() {	}
 }