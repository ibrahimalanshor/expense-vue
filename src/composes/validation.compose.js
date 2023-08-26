import { ref } from 'vue';

export function useValidation() {
  const validation = ref({});

  function setValidation(err) {
    validation.value = err;
  }
  function resetValidation() {
    validation.value = {};
  }

  return { validation, setValidation, resetValidation };
}
