import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { MatSelectModule, MatIconModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import {SelectModule} from 'ng2-select';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';
import {MatDatepickerModule} from '@angular/material/datepicker';;
import { NativeDateAdapter, DateAdapter } from '@angular/material';
import { DateFormat } from './add-persona/formatFecha';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from "ng2-bootstrap/pagination"; // from ng2-bootstrap
import {MatCheckboxModule} from '@angular/material/checkbox'

//Servicios


//Componentes
import { AddadminComponent } from './admin/addadmin.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { DtPersonasComponent } from './add-persona/dt-personas/dt-personas.component';
import { AddGrupoComponent } from './add-grupo/add-grupo.component';



const routes: Routes = [
    { path: 'roles', component: AddadminComponent },
    { path: 'agregar', component: AddPersonaComponent },
    { path: 'grupo', component: AddGrupoComponent }
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
        PaginationModule.forRoot(),
        MatCheckboxModule
      ],
    declarations:
    [
      AddadminComponent,
      AddPersonaComponent,
      DtPersonasComponent,
      AddGrupoComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
      {  provide: DateAdapter, useClass: DateFormat }
  ]
})

export class AdminModule {
  constructor(private dateAdapter:DateAdapter<Date>) {
		dateAdapter.setLocale('en-in'); // DD/MM/YYYY
	}
 }
