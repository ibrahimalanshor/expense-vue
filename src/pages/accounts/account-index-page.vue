<script setup>
import BaseCard from 'src/components/base/base-card.vue';
import BaseButton from 'src/components/base/base-button.vue';
import AccountCreateModal from 'src/components/features/account/account-create-modal.vue';
import { translate } from 'src/helpers/translate';
</script>

<template>
  <base-card :title="translate('app.accounts.title')" with-header>
    <template #header-action>
      <base-button color="sky">{{
        translate('app.accounts.actions.create')
      }}</base-button>
    </template>
  </base-card>
  <account-create-modal />
</template>
