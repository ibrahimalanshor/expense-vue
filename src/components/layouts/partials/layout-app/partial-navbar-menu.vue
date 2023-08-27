<script setup>
import { translate } from 'src/helpers/translate';
import { useRoute } from 'vue-router';

const route = useRoute();

const menus = [
  {
    id: 'home',
    name: translate('navbar.menus.home'),
    to: { name: 'home' },
  },
  {
    id: 'accounts',
    name: translate('navbar.menus.accounts'),
    to: { name: 'accounts.index' },
  },
];

function checkIsActive(menu) {
  return route.matched.some((route) => route.name === menu.id);
}
</script>

<template>
  <div class="flex">
    <div class="hidden sm:flex sm:space-x-8">
      <router-link
        v-for="menu in menus"
        :key="menu.id"
        :to="menu.to"
        :class="[
          'inline-flex items-center px-1 pt-1 text-sm font-medium',
          checkIsActive(menu)
            ? 'text-gray-900'
            : 'border-transparent text-gray-500 hover:text-gray-700',
        ]"
        >{{ menu.name }}
      </router-link>
    </div>
  </div>
</template>
