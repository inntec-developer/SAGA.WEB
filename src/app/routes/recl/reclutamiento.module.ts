import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { SelectModule } from 'ng2-select';
import { TextMaskModule } from 'angular2-text-mask';
import { TagInputModule } from 'ngx-chips';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';

import { Damfo290Component } from './damfo290/damfo290.component';

const routes: Routes = [
    {path: '290', component: Damfo290Component}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SelectModule,
        ColorPickerModule,
        TextMaskModule,
        TagInputModule,
        CustomFormsModule,
        FileUploadModule,
        ImageCropperModule
    ],
    providers: [ColorPickerService],
    declarations: [
        Damfo290Component
    ],
    exports: [
        RouterModule
    ]
})

export class ReclutamientoModule { }