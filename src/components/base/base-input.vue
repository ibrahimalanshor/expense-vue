<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  color: {
    type: String,
    default: 'gray',
  },
  message: {
    type: String,
    default: null,
  },
  withLabel: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
});
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const style = computed(() => {
  const inputColors = {
    red: 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
    gray: 'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-600',
  };
  const messageColors = {
    red: 'text-red-600',
    gray: 'text-gray-900',
  };

  return {
    input: [inputColors[props.color]],
    message: [messageColors[props.color]],
  };
});
</script>

<template>
  <div>
    <div v-if="props.withLabel" class="flex items-center justify-between mb-2">
      <label
        :for="props.id"
        class="block text-sm font-medium leading-6 text-gray-900"
        >{{ props.label }}</label
      >
      <slot name="label-action" />
    </div>
    <input
      :type="props.type"
      :name="props.id"
      :id="props.id"
      :class="[
        style.input,
        'block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 relative rounded-md shadow-sm',
      ]"
      :placeholder="props.placeholder"
      v-model="value"
    />
    <p v-if="props.message" :class="['mt-2 text-sm', style.message]">
      {{ message }}
    </p>
  </div>
</template>
