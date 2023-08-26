<script setup>
import { computed } from 'vue';
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline';
import BaseIconButton from './base-icon-button.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'success',
  },
});
const emit = defineEmits(['close']);

const icon = computed(() => {
  const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
  };

  return icons[props.type];
});
const style = computed(() => {
  const iconColors = {
    success: 'text-green-400',
    error: 'text-red-400',
  };

  return {
    icon: [iconColors[props.type]],
  };
});

function handleClose() {
  emit('close');
}
</script>

<template>
  <div
    class="pointer-events-auto whitespace-nowrap w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
  >
    <div class="p-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <component
            :is="icon"
            :class="['h-6 w-6', style.icon]"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-900">{{ props.title }}</p>
        </div>
        <div class="ml-4 flex flex-shrink-0">
          <base-icon-button v-on:click="handleClose">
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </base-icon-button>
        </div>
      </div>
    </div>
  </div>
</template>
