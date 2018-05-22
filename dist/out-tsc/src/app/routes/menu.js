"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Home = {
    text: 'Inicio',
    link: '/home',
    icon: 'icon-home'
};
var Administracion = {
    text: 'Administracion',
    link: '/admin',
    icon: 'icon-people',
    submenu: [
        {
            text: 'Agregar Grupos',
            link: '/admin/grupoAdd'
        },
        {
            text: 'Agregar Roles',
            link: '/admin/roles'
        },
        {
            text: 'Activar Usuario',
            link: '/admin/agregar'
        },
        {
            text: 'Usuarios-Grupo',
            link: '/admin/grupo'
        },
        {
            text: 'Grupo-Rol',
            link: '/admin/rol'
        }
    ]
};
var Reclutamiento = {
    text: 'Reclutamiento',
    link: '/reclutamiento',
    icon: 'icon-people',
    submenu: [
        {
            text: 'DAMFO 290',
            link: '/reclutamiento/290'
        },
        {
            text: 'Candidatos',
            link: '/reclutamiento/candidatos'
        },
        {
            text: 'Vacantes',
            link: '/reclutamiento/vacantes'
        }
    ]
};
var Ventas = {
    text: 'Ventas',
    link: '/ventas',
    icon: 'icon-share',
    submenu: [
        {
            text: 'Prospectos',
            link: '/ventas/prospecto',
        },
        {
            text: 'Requisiciones',
            link: '/ventas/requisicion',
        }
    ]
};
var headingMain = {
    text: 'Menu Principal',
    heading: true
};
exports.menu = [
    headingMain,
    Home,
    Reclutamiento,
    Ventas,
    Administracion
];
//# sourceMappingURL=menu.js.map