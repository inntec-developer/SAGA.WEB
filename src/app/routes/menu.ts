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
            text: 'Asignar Grupos',
            link: '/admin/roles'
          },
          {
            text: 'Registrar Personal',
            link: '/admin/agregar'
          },
          {
            text: 'Asignar Permisos',
            link: '/admin/grupo'
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
