import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app-prospecto',
    templateUrl: './prospecto.component.html',
    styleUrls: ['./prospecto.component.scss']
})

export class ProspectoComponent implements OnInit {
    constructor() { };
    ngOnInit() {
    }
}