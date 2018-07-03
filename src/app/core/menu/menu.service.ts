import { estructura } from './../../routes/admin/add-roles/add-roles.component';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    menuItems: Array<any>;

    constructor() {
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

    setEstructuraMenu(modules: Array<any>)
    {
        modules.forEach(element => {
            if( element.estructuraId === 4)
            {
                this.menuItems.push({
                    text: 'Reclutamiento',
                    link: '/reclutamiento',
                    icon: 'icon-people',
                    estructura: 4,
                        submenu: [
                            {
                                text: 'DAMFO 290',
                                link: '/reclutamiento/290',
                                estructura: 0
                            },
                            {
                              text: 'Candidatos',
                              link: '/reclutamiento/candidatos', 
                              estructura: 0
                            },
                            {
                              text: 'Vacantes',
                              link: '/reclutamiento/vacantes', 
                              estructura: 0
                            }
                        ]
                });
            } 
        });
        console.log(modules)
        return this.menuItems;

    }

    setEstructuraSubMenu(e: number)
    {
        return this.menuItems.forEach( x => x.submenu.estructura = e)

    }

}
