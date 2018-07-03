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
        var modules = this.settings.user.privilegios.filter(function(row){
            return row.tipoEstructuraId === 2
        });

        modules.forEach(element => { 
            element.children = this.settings.user.privilegios.filter(function(c){
                return c.idPadre === element.estructuraId
            })
        });

        console.log(modules)
       
        let sub: Array<any> = [];
        modules.forEach(element => {
            if( element.estructuraId === 4)
            {
                if(element.children.length > 0)
                {
                    element.children.forEach(c =>{ 
                        sub.push({
                            text: element.children.nombre,
                            link: '/admin/registro'})
                    })
                }
                this.menuItems.push({
                        text: element.nombre,
                        link: '/admin',
                        icon: 'icon-people',

                        
                        submenu: sub
                    });
            }       
        });

        return this.menuItems;

    }

    setEstructuraSubMenu(e: number)
    {
        return this.menuItems.forEach( x => x.submenu.estructura = e)

    }

}
