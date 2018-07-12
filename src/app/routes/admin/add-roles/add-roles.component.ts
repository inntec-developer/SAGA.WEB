
import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import { TreeNode, TreeComponent } from 'angular-tree-component';
import { expand } from 'rxjs/operators';

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
  nodes: Array<any> = [];
  privilegios = [];
  nodeAux : TreeNode;

  customTemplateStringOptions = {
    displayField: 'nombre',
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    allowDrag: false, 
    nodeHeight: 50
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

  childrenCount(node: TreeNode) {
 

       return node && node.children ? `${node.children.length}` : '';
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
      node[title.toLowerCase()] = $event.checked;

      if( this.privilegios.length > 0)
      {
         let idx = this.privilegios.findIndex( x => {
           return x.id == node.id })
         if( idx === -1)
         {
           this.privilegios.push(node);
         }
         else
         {
           this.privilegios[idx][title] = $event.checked;
         }
      }
      else
      {
         this.privilegios.push(node);
      }

      node.children = this.nodes.filter(function(c){
        return c.idPadre === node.id
        });

      if(node.children.length > 0)
      {
         node.children.forEach(element => {
            this.descendantsChecked($event, element, title)
       });
      }
     
      // console.log(this.nodes)
      
   
  }

  CrearEstructura(node)
  {
    if(this.privilegios.length > 0)
    {
      this.privilegios.push({
        estructuraId: node.estructuraId,
        Create: node.create,
        Read: node.read,
        Update: node.update,
        Delete: node.delete,
        Especial: node.especial});
    }
    else if(node.checked)
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
    if(this.privilegios.length > 0)
    {
      let nom = this.formRoles.value.Rol;
      console.log(this.nodes)

      // for( let item of this.nodes)
      // {
      //   this.CrearEstructura(item)
      // }
    
      let obj = this.privilegios.map(function(item) 
      {
        item.Nombre = nom;
        return item;
      });

      console.log(obj)

      this.service.AddRoles(obj)
      .subscribe( data => {
        this.msj = data;
        console.log(this.msj)
        this.ngOnInit();
      });
    }
    else
    {
      alert('No se ha seleccionado Estructuras')
    }
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
  GetEstructura() {
    this.service.GetEstructuraRoles()
      .subscribe(
        e => {
          this.nodes = e;
          console.log(this.nodes)
        })
  }



  ngOnInit() {
    this.GetTreeRoles();
    this.iniciarForm();
  }


  }



