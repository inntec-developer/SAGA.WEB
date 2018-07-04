import { SelectModule } from 'ng2-select';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import { SettingsService } from './../settings/settings.service';

import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    menuItems: Array<any>;
    submenu: Array<any> = [];
    constructor(private settings: SettingsService) {
        this.menuItems = [];
    }

    addMenu(items: Array<{
        text: string,
        heading?: boolean,
        link?: string,     // internal route links
        elink?: string,    // used only for external links
        target?: string,   // anchor target="_blank|_self|_parent|_top|framename"
        icon?: string,
        alert?: string,
        submenu?: Array<any>,
        estructura?: number
        
    }>) {
        items.forEach((item) => {
            this.menuItems.push(item);
        });
    }

    getMenu() {
        return this.menuItems;
    }

    setSubMenu(modules, privilegios)
    {
       let mocos: Array<any> = [];
        
        modules.children = privilegios.filter(function(c){
            return c.idPadre === modules.estructuraId
        });

        if(modules.children.length > 0)
        {
             mocos = modules.children.forEach( child => {
                this.setSubMenu(child, privilegios)
                   return mocos.push({
                        text: child.nombre,
                        link: child.accion
                        
                    })
                });

        }
        return mocos;
    
       
    }
    setEstructuraMenu() //creo el menu dependiendo de los privilegios de usuario
    {
        var privilegios = JSON.parse(localStorage.getItem('privilegios'));

        var modules = privilegios.filter(function(row){
            return row.tipoEstructuraId === 2
        });

        


        modules.forEach(element => {
            // this.menuItems.push({
            //                 text: element.nombre,
            //                 link: element.accion,
            //                 icon: element.icono,
            //                 submenu: []
            //             });   
                
           var mocoss = this.setSubMenu(element, privilegios);
            console.log(mocoss)
            // if(children.length > 0)
            // {
            //     children.forEach( child => {
            //         sub.push({
            //             text: child.nombre,
            //             link: child.accion,
            //             icon: child.icono
            //         })
            //     });

            //     this.menuItems.push({
            //             text: element.nombre,
            //             link: element.accion,
            //             icon: element.icono,
            //             submenu: sub
            //         });   
            // }
        });

        console.log(this.menuItems)
        return this.menuItems;

    }

    setEstructuraSubMenu(e: number)
    {
        return this.menuItems.forEach( x => x.submenu.estructura = e)

    }

}

 // element.children.forEach(c =>{ 
                    //     c.children = privilegios.filter(function(cc){
                    //         return cc.idPadre === c.estructuraId
                    //     });
                        
                    //     c.children.forEach(e => {
                    //         e.children = privilegios.filter(function(ccc){
                    //             return ccc.idPadre === e.estructuraId;
                    //         });
                           
                    //         e.children.forEach(m => {
                    //             m.children = privilegios.filter(function(cccc){
                    //                 return cccc.idPadre == e.estructuraId;
                    //             });
                    //             subsubsub.push({
                    //                 text: m.nombre,
                    //                link: m.accion
                    //             })

                    //         subsub.push({
                    //             text: e.nombre,
                    //             link: e.accion,
                    //             submenu: subsubsub
                    //          })
                    //     })
                    //     sub.push({
                    //         text: c.nombre,
                    //         link: c.accion, 
                    //         submenu: subsub
     
                    //     })
                    // })