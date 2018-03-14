const Home = {
    text: 'Inicio',
    link: '/home',
    icon: 'icon-home'
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
              text: 'Vacantes'
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
            submenu:[
              {
                text: 'Nuevo' ,
                link: '/ventas/requisicion',
              }
            ]
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
    Ventas
];
