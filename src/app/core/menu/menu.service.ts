import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import { SettingsService } from './../settings/settings.service';

import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    menuItems: Array<any>;
    submenu: Array<any>;
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

    setEstructuraMenu() //creo el menu dependiendo de los privilegios de usuario
    {
        var privilegios = JSON.parse(localStorage.getItem('privilegios'));

        var modules = privilegios.filter(function(row){
            return row.tipoEstructuraId === 2
        });

        modules.forEach(element => { 
            element.children = privilegios.filter(function(c){
                return c.idPadre === element.estructuraId
            })
        });

        console.log(modules)
       
        let sub: Array<any> = [];
        modules.forEach(element => {
           
            if(element.children.length > 0)
                {
                    element.children.forEach(c =>{ 
                        sub.push({
                            text: c.nombre,
                            link: c.accion
                        })
                    })

                    console.log(sub)
                }
                this.menuItems.push({
                        text: element.nombre,
                        link: element.accion,
                        icon: element.icono,
                        submenu: sub
                    });   
        });

        return this.menuItems;

    }

    setEstructuraSubMenu(e: number)
    {
        return this.menuItems.forEach( x => x.submenu.estructura = e)

    }

}
