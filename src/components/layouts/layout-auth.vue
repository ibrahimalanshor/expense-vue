<script>
import BaseTitle from 'src/components/base/base-title.vue';
import { translate } from 'src/helpers/translate';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'LayoutAuth',
  components: {
    BaseTitle,
  },
  setup() {
    const route = useRoute();

    const title = computed(() => translate(route.meta.title));

    return { title };
  },
};
</script>

<template>
  <div class="flex bg-white flex-1 flex-col justify-center px-6 py-24 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <base-title :level="2" center>{{ title }}</base-title>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <slot />
    </div>
  </div>
</template>
