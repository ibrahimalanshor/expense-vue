import { RouterView } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/pages/index-page.vue'),
    meta: {
      layout: 'LayoutApp',
      title: 'app.home.title',
      requireAuth: true,
    },
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: RouterView,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: '',
        name: 'accounts.index',
        component: () => import('src/pages/accounts/account-index-page.vue'),
        meta: {
          layout: 'LayoutApp',
          title: 'app.account.title',
        },
      },
    ],
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('src/pages/auth/auth-register-page.vue'),
    meta: {
      layout: 'LayoutAuth',
      title: 'auth.register.title',
      requireGuest: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('src/pages/auth/auth-login-page.vue'),
    meta: {
      layout: 'LayoutAuth',
      title: 'auth.login.title',
      requireGuest: true,
    },
  },
];
