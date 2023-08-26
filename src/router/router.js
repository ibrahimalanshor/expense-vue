import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
// import { useAuthGuard } from './guards/auth.guard';
// import { useGuestGuard } from './guards/guest.guard';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// useAuthGuard(router);
// useGuestGuard(router);

export { router };
