import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-check',
  templateUrl: './button-check.component.html',
  styleUrls: ['./button-check.component.scss']
})
export class ButtonCheckComponent implements OnInit {

  @Input() public ocultar = false;

  constructor() { }

  ngOnInit() {
  }

}
