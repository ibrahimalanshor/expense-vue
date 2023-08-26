<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useTitle } from './composes/title.compose';
import AppProgressBar from './components/app/app-progress-bar.vue';
import AppToast from './components/app/app-toast.vue';

const route = useRoute();
const router = useRouter();
const { setRouteTitle } = useTitle();

router.afterEach(() => {
  setRouteTitle();
});
</script>

<template>
  <component :is="route.meta.layout">
    <app-progress-bar />
    <app-toast />
    <router-view />
  </component>
</template>
