<script setup>
import BaseTitle from './base-title.vue';

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  withHeader: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="divide-y divide-gray-300 bg-white relative rounded-lg border border-gray-300 bg-white shadow-sm"
  >
    <div
      v-if="props.withHeader"
      class="px-4 py-5 sm:px-6 flex items-center justify-between"
    >
      <slot name="header">
        <base-title :level="5" weigth="semibold" leading="leading-6">{{
          title
        }}</base-title>
        <slot name="header-action" />
      </slot>
    </div>
    <div class="px-4 py-5 sm:px-6">
      <slot />
    </div>
  </div>
</template>
