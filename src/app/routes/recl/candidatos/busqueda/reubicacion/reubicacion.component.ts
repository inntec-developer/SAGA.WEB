import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reubicacion',
  templateUrl: './reubicacion.component.html',
  styleUrls: ['./reubicacion.component.scss']
})
export class ReubicacionComponent implements OnInit {

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
