import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialogcandidatos',
  templateUrl: './dialogcandidatos.component.html',
  styleUrls: ['./dialogcandidatos.component.scss']
})
export class DialogcandidatosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogcandidatosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
