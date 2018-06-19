import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex'

import { AsignarRequisicionComponent } from './asignar-requisicion/asignar-requisicion.component';
import { ButtonCancelComponent } from './buttons/button-cancel/button-cancel.component';
import { ButtonDeleteComponent } from './buttons/button-delete/button-delete.component';
import { ButtonEditComponent } from './buttons/button-edit/button-edit.component';
import { ButtonSaveComponent } from './buttons/button-save/button-save.component';
import { ButtonViewComponent } from './buttons/button-view/button-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};

@NgModule({
  imports: [
    CommonModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    FormsModule
  ],
  declarations: [AsignarRequisicionComponent, 
    ButtonSaveComponent, 
    ButtonViewComponent, 
    ButtonDeleteComponent, 
    ButtonCancelComponent, 
    ButtonEditComponent
  ]
})
export class ComponentsModule { }
