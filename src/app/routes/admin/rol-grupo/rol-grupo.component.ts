import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';

@Component({
  selector: 'app-rol-grupo',
  templateUrl: './rol-grupo.component.html',
  styleUrls: ['./rol-grupo.component.scss'],
  providers:[ AdminServiceService ]
})
export class RolGrupoComponent implements OnInit {

  Grupos: Array<any> = [];
  Roles: Array<any> = [];
  ListaRG: Array<any> = [];
  permisoRol: Array<any> = [];
  msj: string = "";

  constructor(private service: AdminServiceService) { }

  addToRol($event)
  {
    console.log($event.dragData)
    this.ListaRG.push($event.dragData);
  }

  resetBasket() {
      this.ListaRG = [];
      this.getGrupos();
  }

  popGrupo(p:any, i: any) {
    console.log(i)

    this.Grupos.splice(i, 1)


  }

  saveData(RolId: any){
    console.log(RolId)
    let lrg = [];

      for(let rg of this.ListaRG)
      {
        lrg.push({EntidadId: rg.id, RolId: RolId, Tipo:2});
      }

      console.log(lrg)
    // this.service.AddPrivilegios(data)
    // .subscribe( data => {
    //   this.msj = data;
    // });
  }

  selected($event, rol: any)
  {
    var id = $event.target.value;
    console.log(id)

    this.permisoRol = this.Roles.filter(item => item.id == id);

  }
  getGrupos()
  {
    this.service.getGrupos()
    .subscribe(
      e=>{
        this.Grupos = e;
      })

  }

  getRoles()
  {
    this.service.getRoles()
    .subscribe(
      e=>{
        this.Roles = e;
        console.log(this.Roles)
      })

  }

  ngOnInit() {
    this.getGrupos();
    this.getRoles();
  }

}
