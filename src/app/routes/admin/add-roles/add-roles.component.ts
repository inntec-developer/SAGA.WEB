import { state } from '@angular/animations';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping, TreeModule, TreeComponent } from 'angular-tree-component';
import { query } from '@angular/core/src/animation/dsl';

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
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ AdminServiceService ]
})

export class AddRolesComponent implements OnInit {

  formRoles: FormGroup;
  msj: string;
  nodes: Array<estructura> = [];
  privilegios = [];

  customTemplateStringOptions = {
    displayField: 'nombre',
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    allowDrag: true, 
  };

  constructor(private service: AdminServiceService
              ,public fb: FormBuilder )
  {
    this.iniciarForm();
    this.msj = '';

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

  childrenCount(node: TreeNode): string {
      return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text, tree) {
      tree.treeModel.filterNodes(text, true);
  }

  iniciarForm()
  {
    this.formRoles = this.fb.group({
      Rol: ['', [Validators.required]]
    });

  }

  descendantsChecked($event, node, title)
  {
      let eid = node.data.estructuraId;
      node.data[title.toLowerCase()] = $event.checked;

      // this.nodes[ind][title.toLowerCase()] = $event.checked;
   
    //   let ind = this.nodes.forEach(function(item, index)
    // {
    //   console.log(eid)
    //     if(item.estructuraId === eid)
    //     {
    //       console.log("entro")
          
        
    //       console.log(item)
    //       return index;
    //     }
      
       

    // } );
      console.log(this.nodes)
      
   

    //
  }
   /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node, value, tree)  
  {
     node.data.checked = value;
     node.data.read = value;
     tree.treeModel.getNodeById(node.data.uuid)
        .setActiveAndVisible();
     if(node.children.length > 0)
     {
       node.children.forEach(element => {
         this.descendantsAllSelected(element, value, tree)
       });
     }
  }
 
  // updateValue($event, cell, rowIndex)
  // {

  //   if(cell.toLowerCase() !== 'rol')
  //   {
  //     this.nodes[rowIndex][cell] = $event.checked;
  //   }
  //   else if( cell.toLowerCase() === 'rol' && $event.target.value !== '' )
  //   {
  //     this.nodes[rowIndex][cell.toLowerCase()] = $event.target.value;
  //   }
    
  //   this.editing[rowIndex + '-' + cell] = false;
  //   this.nodes = [...this.nodes];
  // }

  CrearEstructura(node)
  {
    if(this.privilegios.length > 0 )
    {
      this.privilegios.push({
        estructuraId: node.estructuraId,
        Create: node.create,
        Read: node.read,
        Update: node.update,
        Delete: node.delete,
        Especial: node.especial});
    }
    else
    {
      this.privilegios = [{
        estructuraId: node.estructuraId,
        Create: node.create,
        Read: node.read,
        Update: node.update,
        Delete: node.delete,
        Especial: node.especial}];
     }
     if(node.children.length > 0)
     {
       node.children.forEach(element => {
         this.CrearEstructura(element)
       });
     }
  }

  saveData()
  {
    let nom = this.formRoles.value.Rol;
       
    for( let item of this.nodes)
    {
      if(item.checked)
      {
        this.CrearEstructura(item)
      }
    }
  
    let obj = this.privilegios.map(function(item) 
    {
      item.Nombre = nom;
      return item;
    });

    console.log(this.privilegios)

    // console.log(this.privilegios)

    this.service.AddRoles(obj)
    .subscribe( data => {
      this.msj = data;
      console.log(this.msj)
     });
  }

  // updateRol($event,rowIndex)
  // {
  //   let rol = this.nodes[rowIndex]
  //   console.log(rol)
  //   this.service.UpdateRoles(rol)
  //     .subscribe( data => {
  //     this.msj = data;
  //     console.log(this.msj)
  //     this.iniciarForm();
  //     this.GetTreeRoles();
  //   });
  
  // }
  // DeleteRoles( $even, rowIndex: any )
  // {
  //   let g = this.nodes[rowIndex]
  //   console.log(g)
  //   this.service.DeleteRoles(g)
  //     .subscribe( data => {
  //     this.msj = data;
  //     console.log(this.msj)
  //     this.iniciarForm();
  //     // this.getRoles();
  //       this.nodes.splice(rowIndex, 1);
  //   this.nodes = [...this.nodes];
  //   });
//  alert("los datos se borraron")
//  }

  GetTreeRoles()
  {
    this.service.GetTreeRoles()
    .subscribe(
      e=>{
        this.nodes = e;
      
        console.log(this.nodes)
      })
  }


  ngOnInit() {
    this.GetTreeRoles();
  }

}
