

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { MatSelectModule, MatIconModule, MatInputModule, MatNativeDateModule, MatTooltipModule } from '@angular/material';
import {SelectModule} from 'ng2-select';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';
import {MatDatepickerModule} from '@angular/material/datepicker';;
import { NativeDateAdapter, DateAdapter } from '@angular/material';
import { Ng2TableModule } from 'ng2-table/ng2-table';
// import { PaginationModule } from "ng2-bootstrap/pagination"; // from ng2-bootstrap
import {MatCheckboxModule} from '@angular/material/checkbox'
import { AgGridModule } from 'ag-grid-angular/main';
import {NgxDatatableModule} from '@swimlane/ngx-datatable'
import {MatDialogModule} from '@angular/material/dialog';
import { TreeModule } from 'angular-tree-component';
import {ModalModule} from 'ngx-bootstrap';
import {PopoverModule} from 'ngx-popover';


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
import { AuthService } from './../../service/auth/auth.service';
import { LogInGuardGuard } from './../../auth-guard/log-in-guard.guard';

const routes: Routes = [
    { path: 'roles', component: AddRolesComponent },
    { path: 'agregar', component: AddPersonaComponent },
    { path: 'grupo', component: AddadminComponent },
    { path: 'grupoAdd', component: AddGrupoComponent },
    { path: 'rol', component: RolGrupoComponent },
    { path: 'privilegios', component: RollsStructComponent, canActivateChild: [LogInGuardGuard] },
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
        //PaginationModule.forRoot(),
        MatCheckboxModule,
        AgGridModule,
        NgxDatatableModule, 
        MatDialogModule, 
        MatTooltipModule,
        TreeModule,
        PagesModule,
        ComponentsModule,
        ModalModule.forRoot(),
        PopoverModule
        
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
      RegistroComponent
    ],
    exports: [
        RouterModule,
        AddPersonaComponent
    ], 
    providers: [LogInGuardGuard,AuthService]
})

export class AdminModule {
  constructor() {	}
 }
