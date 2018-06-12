import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
      contextMenu: (tree, node, $event) => {
          $event.preventDefault();
          alert(`context menu for ${node.data.name}`);
      },
      dblClick: TREE_ACTIONS.TOGGLE_EXPANDED,
      click: (tree, node, $event) => {
          $event.shiftKey
              ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
              : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event);
      }
  },
  keys: {
      [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};


const mocos = [
  {
    id: 1,
    name: 'root1',
    checked: false,
    children: [
      { id: 2, name: 'child1'},
      { id: 3, name: 'child2' }
    ]
  },
  {
    id: 4,
    name: 'root2',
    children: [
      { id: 5, name: 'child2.1' },
      {
        id: 6,
        name: 'child2.2',
        children: [
          { id: 7, name: 'subsub' }
        ]
      }
    ]
  }
];

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
  nodes = [];
  editing = {};
  columns = [
    { title: 'ROL' },
    { title: 'CREAR' },
    { title: 'LEER' },
    { title: 'ACTUALIZAR' },
    { title: 'BORRAR' },
    { title: 'ESPECIAL' }];

    asyncChildren = [
        {
            name: 'child2.1',
            subTitle: 'new and improved'
        }, {
            name: 'child2.2',
            subTitle: 'new and improved2'
        }
    ];

  
    customTemplateStringOptions = {
      // displayField: 'subTitle',
      isExpandedField: 'expanded',
      idField: 'uuid',
      getChildren: this.getChildren.bind(this),
      actionMapping,
      allowDrag: true
  };

  onEvent(msg) {
      console.log(msg);
  }



  constructor(private service: AdminServiceService
              ,public fb: FormBuilder )
  {
    this.iniciarForm();
    this.msj = '';

    setTimeout(() => {
      this.nodes = [
          {

              expanded: true,
              name: 'root expanded',
              subTitle: 'the root',
              children: [
                  {
                      name: 'child1',
                      subTitle: 'a good child',
                      hasChildren: false
                  }, {

                      name: 'child2',
                      subTitle: 'a bad child',
                      hasChildren: false
                  }
              ]
          },
          {
              name: 'root2',
              subTitle: 'the second root',
              children: [
                  {
                      name: 'child2.1',
                      subTitle: 'new and improved',
                      hasChildren: false
                  }, {

                      name: 'child2.2',
                      subTitle: 'new and improved2',
                      children: [
                          {
                              uuid: 1001,
                              name: 'subsub',
                              subTitle: 'subsub',
                              hasChildren: false
                          }
                      ]
                  }
              ]
          },
          {

              name: 'asyncroot',
              hasChildren: true
          }
      ];
  }, 1);
  }

   getChildren(node: any) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.asyncChildren.map((c) => {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })), 1000);
        });
    }

    addNode(tree) {
      this.nodes[0].children.push({

          name: 'a new child'
      });
      tree.treeModel.update();
  }

  childrenCount(node: TreeNode): string {
      return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text, tree) {
      tree.treeModel.filterNodes(text, true);
  }

  activateSubSub(tree) {
      // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
      tree.treeModel.getNodeById(1001)
          .setActiveAndVisible();
  }

  go($event) {
      $event.stopPropagation();
      alert('this method is on the app component');
  }
 
  iniciarForm()
  {
    this.formRoles = this.fb.group({
      Rol: ['', [Validators.required]],
      Create:0,
      Read:1,
      Update:0,
      Delete:0,
      Especial:0,
      Activo: 1
    });

  }


  updateValue($event, cell, rowIndex)
  {

    if(cell.toLowerCase() !== 'rol')
    {
      this.nodes[rowIndex][cell] = $event.checked;
    }
    else if( cell.toLowerCase() === 'rol' && $event.target.value !== '' )
    {
      this.nodes[rowIndex][cell.toLowerCase()] = $event.target.value;
    }
    
    this.editing[rowIndex + '-' + cell] = false;
    this.nodes = [...this.nodes];
  }
  saveData(){
    this.service.AddRoles(this.formRoles.value)
    .subscribe( data => {
      this.msj = data;
      this.iniciarForm();
      this.GetTreeRoles();
    });
  }
  updateRol($event,rowIndex)
  {
    let rol = this.nodes[rowIndex]
    console.log(rol)
    this.service.UpdateRoles(rol)
      .subscribe( data => {
      this.msj = data;
      console.log(this.msj)
      this.iniciarForm();
      this.GetTreeRoles();
    });
  
  }


  DeleteRoles( $even, rowIndex: any )
  {
    let g = this.nodes[rowIndex]
    console.log(g)
    this.service.DeleteRoles(g)
      .subscribe( data => {
      this.msj = data;
      console.log(this.msj)
      this.iniciarForm();
      // this.getRoles();
        this.nodes.splice(rowIndex, 1);
    this.nodes = [...this.nodes];
    });
 
  
    
 alert("los datos se borraron")
 }

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
