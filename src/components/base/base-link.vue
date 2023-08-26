<script setup>
const props = defineProps({
  to: {
    type: null,
    required: true,
  },
});
</script>

<template>
  <router-link
    :to="to"
    class="text-sm font-semibold text-sky-600 hover:text-sky-500"
    ><slot
  /></router-link>
</template>
