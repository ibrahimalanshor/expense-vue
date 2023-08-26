import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

export function usePersist(store) {
  store.use(piniaPluginPersistedState);
}
