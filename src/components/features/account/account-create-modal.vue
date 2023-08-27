<script setup>
import { computed } from 'vue';
import BaseModal from 'src/components/base/base-modal.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseButton from 'src/components/base/base-button.vue';
import { translate } from 'src/helpers/translate';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

function handleCancel() {
  visible.value = false;
}
</script>

<template>
  <base-modal
    :title="translate('app.accounts.actions.create')"
    with-header
    with-footer
    v-model="visible"
  >
    <div class="space-y-6">
      <base-input
        :label="translate('app.accounts.placeholder.name')"
        :placeholder="translate('app.accounts.placeholder.name')"
        with-label
      />
      <base-input
        type="number"
        :label="translate('app.accounts.placeholder.initial-balance')"
        :placeholder="translate('app.accounts.placeholder.initial-balance')"
        with-label
      />
    </div>

    <template #footer>
      <div class="flex items-center justify-end gap-x-2">
        <base-button color="sky">{{ translate('common.save') }}</base-button>
        <base-button v-on:click="handleCancel">{{
          translate('common.cancel')
        }}</base-button>
      </div>
    </template>
  </base-modal>
</template>
