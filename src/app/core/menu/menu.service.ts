import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menuItems: Array<any>;
    submenu: Array<any> = [];
    privilegios: Array<any> = [];

    constructor()
    {
        this.privilegios = [];
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

    /*recursividad para generar el menu*/
    setSubMenu(modules)
    {
        var  menuList = [];

        modules.children = this.privilegios.filter(function(c){
         return c.idPadre === modules.estructuraId
         });
 
         modules.children.forEach(element => {
             if(modules.tipoEstructuraId < 4){ //para limitar lo que se puede ver en el menu
                 if( element.idPadre == modules.estructuraId)
                 { 
                     var submenu = {text: element.nombre, link: element.accion, submenu: this.setSubMenu(element)}
                     if(submenu.submenu.length === 0)
                     {
                         menuList.push({text:submenu.text, link: submenu.link})
                     }
                     else
                     {
                     menuList.push(submenu);
                     }
                     // menuList.push({text: element.nombre, link: element.accion, submenu: this.otraSub(element, privilegios) })
                 }
             }
         });

         return menuList
       
    }
    setEstructuraMenu() //creo el menu dependiendo de los privilegios de usuario
    {
        this.privilegios = JSON.parse(localStorage.getItem('privilegios'));
        
        if(this.privilegios != [])
        {
            var modules = this.privilegios.filter(function(row){
                        return row.tipoEstructuraId === 2
                        });
            
            modules.forEach(element => {
                    this.menuItems.push( { text: element.nombre, icon: element.icono, submenu: this.setSubMenu(element) })
                    });   

            return this.menuItems;
        }
    }

    setEstructuraSubMenu(e: number)
    {
        return this.menuItems.forEach( x => x.submenu.estructura = e)

    }

}
