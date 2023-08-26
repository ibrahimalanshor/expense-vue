export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/pages/index-page.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('src/pages/auth/auth-register-page.vue'),
    meta: {
      layout: 'LayoutAuth',
      title: 'auth.register.title',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('src/pages/auth/auth-register-page.vue'),
  },
];
