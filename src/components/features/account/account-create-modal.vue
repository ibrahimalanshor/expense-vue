<script setup>
import { computed, reactive } from 'vue';
import BaseModal from 'src/components/base/base-modal.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseButton from 'src/components/base/base-button.vue';
import { translate } from 'src/helpers/translate';
import { useStoreBalance } from 'src/composes/balance/store-balance.compose.js';
import { useToastStore } from 'src/store/modules/toast.module';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue', 'success']);

const toastStore = useToastStore();
const {
  loading,
  validation,
  store: storeBalance,
  resetError,
  resetValidation,
} = useStoreBalance();

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
const form = reactive({
  name: null,
  balance: null,
});

function handleCancel() {
  visible.value = false;
}
async function handleSubmit() {
  const [success] = await storeBalance(form);

  if (success) {
    toastStore.createToast({
      title: translate('app.account.messages.created'),
      type: 'success',
    });

    visible.value = false;

    emit('success');
  }
}
function handleVisible() {
  resetError();
  resetValidation();

  form.name = null;
  form.balance = null;
}
</script>

<template>
  <base-modal
    :title="translate('app.account.actions.create')"
    with-header
    with-footer
    v-model="visible"
    v-on:visible="handleVisible"
  >
    <form class="space-y-6" v-on:submit.prevent="handleSubmit">
      <base-input
        :label="translate('app.account.placeholder.name')"
        :placeholder="translate('app.account.placeholder.name')"
        :color="validation.name ? 'red' : 'gray'"
        :message="validation.name"
        with-label
        v-model="form.name"
      />
      <base-input
        type="number"
        :label="translate('app.account.placeholder.initial-balance')"
        :placeholder="translate('app.account.placeholder.initial-balance')"
        :color="validation.balance ? 'red' : 'gray'"
        :message="validation.balance"
        with-label
        v-model="form.balance"
      />
      <input type="submit" hidden />
    </form>

    <template #footer>
      <div class="flex items-center justify-end gap-x-2">
        <base-button color="sky" :loading="loading" v-on:click="handleSubmit">{{
          translate('common.save')
        }}</base-button>
        <base-button v-on:click="handleCancel">{{
          translate('common.cancel')
        }}</base-button>
      </div>
    </template>
  </base-modal>
</template>
