import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';

@Component({
  selector: 'app-rolls-struct',
  templateUrl: './rolls-struct.component.html',
  styleUrls: ['./rolls-struct.component.scss'],
  providers:[ AdminServiceService ]
})
export class RollsStructComponent implements OnInit {

  @Input() public StructList: Array<any> = null; // Url api process upload
  @Output('onItemChanged') public onItemChanged = new EventEmitter();
  columns = [
    
      {title: 'ROL'},
      {title: 'NOMBRE ESTRUCTURA'},
      {title: "CREATE"},
      {title: "READ"},
      {title: "DELETE"},
      {title: "UPDATE"},
      {title: "ESPECIAL"}
  ]
  filteredData: Array<any> = [];
  editing = {};

  constructor(private service: AdminServiceService) { }

  updateValue(event, cell, rowIndex) 
  {
    
    this.editing[rowIndex + '-' + cell] = false;

  }

  public Search(data: any ) {

    let tempArray: Array<any> = [];
    let colFiltar: Array<any> = [{ title: "rol"}, {title:"nombre"}];

    this.StructList.forEach(function(item)
    {
      let flag = false;
      colFiltar.forEach(function(c)
      {
        if(item[c.title].toString().match(data.target.value))
        {
          flag = true;
        }
      });

      if(flag)
      {
        tempArray.push(item)
      }
    });

    this.filteredData = tempArray;
    // this.filteredData = this.StructList.filter(function(item){
    //             return item['nombre'].match(data.target.value);
    //         });

}
setData()
{
  this.onItemChanged.emit(this.StructList);
}

setStruct( data: any)
{
  this.filteredData = data;

}


  GetEstructura()
  {
    this.service.GetEstructuraRoles()
    .subscribe(
      e=>{
        this.StructList = e;
        this.filteredData = e;
        this.setData();
      })
  }
  ngOnInit() {
    
    this.GetEstructura();
  
    
  }

}
