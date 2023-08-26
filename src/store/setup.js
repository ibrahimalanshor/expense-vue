import { createPinia } from 'pinia';
import { usePersist } from './plugins/persist';

export function setupStore(app) {
  const store = createPinia();

  usePersist(store);

  app.use(store);
}
