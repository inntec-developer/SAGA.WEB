
const Home = {
    text: 'Inicio',
    link: '/home',
    icon: 'icon-home',
};

const Administracion = {
    text: 'Administrar',
    link: '/admin',
    icon: 'icon-people',
    submenu:[
        {
            text: 'Registro Usuario', 
            link: '/admin/registro'
        },
        {
            text: 'Usuarios',
            link: '/admin/agregar'
        },
        {
            text: 'Grupos',
            link: '/admin/grupoAdd'
        },
        {
            text: 'Roles',
            link: '/admin/roles'
        },
        {
            text: 'Roles-Privilegios',
            link: '/admin/privilegios'
        },
        {
            text: 'Usuarios-Grupo',
            link: '/admin/grupo'
        },
        {
            text: 'Grupos-Rol',
            link: '/admin/rol'
        }
    ]
};

const Reclutamiento = {
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
};

const Ventas = {
    text: 'Ventas',
    link: '/ventas',
    icon: 'icon-share',
    estructura: 0,
    submenu: [
        {
            text: 'Prospectos',
            link: '/ventas/prospecto',
            estructura: 0
        },
        {
            text: 'Requisiciones',
            link: '/ventas/requisicion',
            estructura: 0
        }

    ]
};

const headingMain = {
    text: 'Menu Principal',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Reclutamiento,
    Ventas,
    Administracion
];
