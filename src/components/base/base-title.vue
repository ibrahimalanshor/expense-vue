<script setup>
import { computed } from 'vue';

const props = defineProps({
  level: {
    type: Number,
    default: 1,
  },
  center: {
    type: Boolean,
    default: false,
  },
  weigth: {
    type: String,
    default: 'bold',
  },
  tight: {
    type: Boolean,
    default: true,
  },
  classes: {
    type: Object,
    default: () => ({
      heading: '',
    }),
  },
});

const style = computed(() => {
  const fontSizes = {
    1: 'text-3xl',
    2: 'text-2xl',
    3: 'text-xl',
    4: 'text-lg',
    5: 'text-base',
  };
  const fontWeights = {
    bold: 'font-bold',
    semibold: 'font-semibold',
  };

  return {
    heading: [
      fontSizes[props.level],
      props.center ? 'text-center' : '',
      fontWeights[props.weigth],
      props.tight ? 'tracking-tight' : '',
      'text-gray-900',
      'leading-9',
      props.classes.heading,
    ],
  };
});
</script>

<template>
  <component :is="`h${props.level}`" :class="style.heading">
    <slot />
  </component>
</template>
