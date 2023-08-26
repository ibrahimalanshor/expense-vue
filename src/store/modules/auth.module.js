import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isLoggedIn = ref(false);
    const accessToken = ref(null);
    const me = ref(null);

    function login(values) {
      accessToken.value = values.accessToken;
      isLoggedIn.value = true;
    }

    return { isLoggedIn, accessToken, me, login };
  },
  { persist: true },
);
