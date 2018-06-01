import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { SettingsService } from '../../../core/settings/settings.service';
import { settings } from 'cluster';

@Component({
    selector: 'app-damfo',
    templateUrl: './damfo290.component.html',
    styleUrls: ['./damfo290.component.scss']
})

export class Damfo290Component implements OnInit {
  public URL: string;
  constructor(
    private settings : SettingsService
  ) { }

  ngOnInit(){
    this.goToDamfo();
  }

  goToDamfo(){
    window.location.href = 'http://192.168.8.130:444/Home/' + this.settings.user.name;
  }
}
