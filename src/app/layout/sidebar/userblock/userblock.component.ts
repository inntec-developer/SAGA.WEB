import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../../core/settings/settings.service';
import { UserblockService } from './userblock.service';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(
        public userblockService: UserblockService,
        private settings : SettingsService) {
        debugger;
        this.user = {
            picture: localStorage.getItem('foto'),
            name: localStorage.getItem('nombre'),
            clave: localStorage.getItem('clave')
        };
    }

    ngOnInit() {
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
