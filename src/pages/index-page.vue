<script setup>
import BaseTitle from 'src/components/base/base-title.vue';
const balances = [
  {
    id: 1,
    name: 'Dompet',
    balance: 125000,
  },
  {
    id: 2,
    name: 'Rekening BCA',
    balance: 3954000,
  },
  {
    id: 3,
    name: 'Tabungan',
    balance: 0,
  },
  {
    id: 4,
    name: 'Paypal',
    balance: 100000,
  },
];
</script>
<template>
  <div class="space-y-5">
    <base-title :level="5" weigth="semibold" leading="leading-6"
      >Accounts</base-title
    >
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
      <div
        v-for="balance in balances"
        :key="balance.id"
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <a href="#" class="focus:outline-none">
          <p class="text-sm font-medium text-gray-900">{{ balance.name }}</p>
          <p class="truncate text-sm text-gray-500">{{ balance.balance }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
