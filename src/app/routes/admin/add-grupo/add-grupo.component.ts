import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-grupo',
  templateUrl: './add-grupo.component.html',
  styleUrls: ['./add-grupo.component.scss'],
  providers:[ AdminServiceService ]
})
export class AddGrupoComponent implements OnInit {

 @ViewChild('myCheckbox') private myCheckbox: MatCheckbox;

  listGrupos:  Array<any> = [];
  constructor( private service: AdminServiceService ) { }

  selected($event)
  {

    console.log($event.target.value)
  this.limpiarCheckBox();
  }

  limpiarCheckBox(){
    this.myCheckbox.checked = false;
}

  ngOnInit() {
    this.service.getTipos()
    .subscribe(
      e=>{
        this.listGrupos = e;
      })
  }

}
