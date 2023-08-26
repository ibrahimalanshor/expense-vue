import { ref } from 'vue';
import { translate } from 'src/helpers/translate';

export function useError() {
  const error = ref();

  function setError(err) {
    if (err?.response?.data?.message) {
      error.value = err.response.data.message;
    } else if (err.message) {
      error.value = err.message;
    } else {
      error.value = translate('error.client');
    }
  }
  function resetError(err) {
    error.value = null;
  }

  return { error, setError, resetError };
}
