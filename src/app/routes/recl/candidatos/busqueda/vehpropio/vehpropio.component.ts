import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehpropio',
  templateUrl: './vehpropio.component.html',
  styleUrls: ['./vehpropio.component.scss']
})
export class VehpropioComponent implements OnInit {

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
