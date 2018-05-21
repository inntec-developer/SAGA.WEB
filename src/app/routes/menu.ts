const Home = {
    text: 'Inicio',
    link: '/home',
    icon: 'icon-home'
};

const Administracion = {
    text: 'Administracion',
    link: '/admin',
    icon: 'icon-people',
        submenu:[
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

const Reclutamiento = {
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

const Ventas = {
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
