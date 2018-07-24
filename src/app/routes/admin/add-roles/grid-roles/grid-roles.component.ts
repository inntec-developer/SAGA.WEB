
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminServiceService } from '../../../../service/AdminServicios/admin-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


export class estructura
{
  id = 0
  idPadre = 0
  nombre = ""
  estructuraId = 0
  children: Array<estructura> = [];
  checked = false
}


@Component({
  selector: 'app-grid-roles',
  templateUrl: './grid-roles.component.html',
  styleUrls: ['./grid-roles.component.scss'],
  providers: [ AdminServiceService ]

})
export class GridRolesComponent implements OnInit {

 
loginText = 'Login';
signUpText = 'Sign Up'; 
 
  StructList: Array<any> = [];
  formRoles: FormGroup;
  privilegios = [];
  padres: Array<any> = [];
  nodes: Array<any> = [];
  columns = [
    { title: 'NOMBRE ESTRUCTURA' },
    { title: "CREAR" },
    { title: "LEER" },
    { title: "MODIFICAR" },
    { title: "BORRAR" },
    { title: "ESPECIAL" }
  ]
  
  cols = [
    { field: 'nombre', header: 'Name' },
    { field: 'read', header: 'Size' },
    { field: 'type', header: 'Type' }
];

  customTemplateStringOptions = {
    displayField: 'nombre',
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    allowDrag: true, 
  };

  constructor(private service: AdminServiceService ,public fb: FormBuilder) {
    this.formRoles = this.fb.group({
      Rol: ['', [Validators.required]]
    });

   }

  ngOnInit() {
   // this.GetStruct();
   this.GetTreeRoles();
  
  }
  public getRowStyleClass () {
    return "<style type=\"text/css\">.errorStyle{background-color:red;background-image:none;}</style>";
}

  getChildren(node: any) {
    return new Promise((resolve, reject) => {
          // setTimeout(() => resolve(this.nodes.map((c) => {
          //     return Object.assign({}, c, {
          //         checked: false
          //     });
          // })), 1000);
    });
}

  // iniciarForm()
  // {
  //   var modules = this.StructList.filter(function(row){
  //     return row.tipoEstructuraId === 2
  //      });

  //   modules.forEach(element => {
  //     this.padres.push( { papa: element.nombre, hijo: this.setEstructura(element, this.StructList) } );
  //     });   
  
  //     console.log(this.padres)

  // }

  setEstructura( element )
  {
    var  padres = [];

    // element.children = struct.filter(function(c){
    //      return c.idPadre === element.estructuraId
    //      });

    
    if(element.length > 0)
    {
      element.forEach(el => {
      
          padres.push( { data: { nombre: el.nombre, read: el.read }, children: this.setEstructura(el.children)} )
        
    });
  }
         return padres
  }

  // GetStruct()
  // {
  //   this.service.GetStruct()
  //   .subscribe(
  //     e=>{
  //       this.StructList = e;

  //     this.iniciarForm();
  //     })

    
  // }

  GetTreeRoles()
  {
    this.service.GetTreeRoles()
    .subscribe(
      e=>{

        this.StructList = e;
        this.StructList.forEach( element => {
          this.padres.push({data:{nombre: element.nombre, read: element.read }, children: this.setEstructura(element.children)})
        });

        console.log(this.padres)

      })
      //return this.padres
  }

}
