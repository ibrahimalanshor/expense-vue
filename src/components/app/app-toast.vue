<script setup>
import BaseToast from 'src/components/base/base-toast.vue';
import { useToastStore } from 'src/store/modules/toast.module';
import { computed } from 'vue';

const toastStore = useToastStore();
const toasts = computed(() => toastStore.toasts);

function handleClose(index) {
  toastStore.removeToast({ index });
}
</script>

<template>
  <div
    class="fixed top-6 left-1/2 -translate-x-1/2 w-fit min-w-[300px] space-y-4"
  >
    <base-toast
      v-for="(toast, index) in toasts"
      :key="toast.id"
      :title="toast.title"
      :type="toast.type"
      v-on:close="handleClose(index)"
    />
  </div>
</template>
