import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

export function setupRouter(app) {
  app.use(
    createRouter({
      history: createWebHistory(),
      routes,
    }),
  );
}
