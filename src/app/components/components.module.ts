import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex'

import { AsignarRequisicionComponent } from './asignar-requisicion/asignar-requisicion.component';
import { ButtonCancelComponent } from './buttons/button-cancel/button-cancel.component';
import { ButtonDeleteComponent } from './buttons/button-delete/button-delete.component';
import { ButtonDesignComponent } from './buttons/button-design/button-design.component';
import { ButtonEditComponent } from './buttons/button-edit/button-edit.component';
import { ButtonRefreshComponent } from './buttons/button-refresh/button-refresh.component';
import { ButtonReturnComponent } from './buttons/button-return/button-return.component';
import { ButtonSaveComponent } from './buttons/button-save/button-save.component';
import { ButtonViewComponent } from './buttons/button-view/button-view.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};

@NgModule({
  imports: [
    CommonModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [
    AsignarRequisicionComponent,
    ButtonSaveComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    ButtonViewComponent,
    ButtonCancelComponent,
    ButtonReturnComponent,
    ButtonRefreshComponent,
    ButtonDesignComponent

  ],
  exports:[
    AsignarRequisicionComponent,
    ButtonSaveComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    ButtonViewComponent,
    ButtonCancelComponent,
    ButtonReturnComponent,
    ButtonRefreshComponent,
    ButtonDesignComponent

  ]
})
export class ComponentsModule { }
