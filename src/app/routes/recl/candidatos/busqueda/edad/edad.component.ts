import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.scss']
})
export class EdadComponent implements OnInit {
  options: FormGroup;

   constructor(fb: FormBuilder) {
     this.options = fb.group({
       'edadmin': [16, Validators.min(18)],
     });
   }

   getFontSize() {
     console.log(this.options.value.edadmin);
     return Math.max(18, this.options.value.edadmin);
   }

  ngOnInit() {
  }

}
