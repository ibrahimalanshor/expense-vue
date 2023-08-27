<script setup>
import { computed } from 'vue';
import BaseSpinner from './base-spinner.vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
  },
  color: {
    type: String,
    default: 'white',
  },
  fullwidth: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const style = computed(() => {
  const sizes = {
    xs: 'rounded px-2 py-1 text-xs',
    sm: 'rounded px-2 py-1 text-sm',
    md: 'rounded-md px-2.5 py-1.5 text-sm',
    lg: 'rounded-md px-3 py-2 text-sm',
    xl: 'rounded-md px-3.5 py-2.5 text-sm',
  };
  const colors = {
    sky: 'bg-sky-600 text-white hover:bg-sky-500 focus-visible:outline-sky-600',
    white:
      'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
  };

  return {
    button: [
      sizes[props.size],
      colors[props.color],
      props.fullwidth ? 'w-full' : '',
    ],
  };
});
</script>

<template>
  <button
    :type="props.type"
    :class="[
      'flex items-center gap-x-2 justify-center font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-75',
      style.button,
    ]"
    :disabled="props.loading"
  >
    <base-spinner v-if="props.loading" size="sm" />
    <slot />
  </button>
</template>
