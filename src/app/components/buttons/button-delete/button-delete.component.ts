import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent implements OnInit {

  @Input('disabled') disabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
