import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../../core/settings/settings.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public userLog: boolean;

    constructor(
        private _Route: ActivatedRoute,
        private settings : SettingsService
    ) { }

    ngOnInit() {
    }
}
