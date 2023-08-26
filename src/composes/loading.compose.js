import { ref } from 'vue';

export function useLoading(initLoading = false) {
  const isLoading = ref(initLoading);

  function startLoading() {
    isLoading.value = true;
  }

  function stopLoading() {
    isLoading.value = false;
  }

  return { isLoading, startLoading, stopLoading };
}
