import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() =>
      import('./views/HomePage' /* webpackChunkName: "HomePage" */),
    ),
    private: false,
    restricted: false,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() =>
      import('./views/ContactsPage' /* webpackChunkName: "ContactsPage" */),
    ),
    private: true,
    restricted: false,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() =>
      import('./views/LoginPage' /* webpackChunkName: "LoginPage" */),
    ),
    private: false,
    restricted: true,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() =>
      import('./views/RegisterPage' /* webpackChunkName: "RegisterPage" */),
    ),
    private: false,
    restricted: true,
  },
];
