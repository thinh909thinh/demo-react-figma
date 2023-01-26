import { Layout } from 'layout';
import { paths } from 'lib/constants';
import { lazy } from 'react';

const routes = [
    {
        route: '*',
        component: Layout,
        routes: [
            {
                path: paths.Landing,
                exact: true,
                component: lazy(() => import('pages/home/Home')),
            },
            {
                path: paths.about,
                component: lazy(() => import('pages/about/AboutPage')),
            },
            {
                path: paths.service,
                component: lazy(() => import('pages/service/ServicePage')),
            },
            {
                path: paths.contact,
                component: lazy(() => import('pages/contact/ContactPage')),
            },
            {
                path: paths.gallery,
                component: lazy(() => import('pages/gallery/Gallery')),
            },
            {
                path: paths.blog,
                component: lazy(() => import('pages/blog/Blog')),
            },
            {
                path: paths.teams,
                component: lazy(() => import('pages/teams/Teams')),
            },
        ],
    },
];

export default routes;
