<script setup>
import BaseCard from './base-card.vue';
import BaseIconButton from './base-icon-button.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  withHeader: {
    type: Boolean,
    default: false,
  },
  withFooter: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 sm:p-0">
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div class="sm:my-8 sm:w-full sm:max-w-sm">
          <base-card
            shadow="shadow-xl"
            :with-header="props.withHeader"
            :with-footer="props.withFooter"
            :title="props.title"
            :bordered="false"
          >
            <template #header-action>
              <base-icon-button>
                <x-mark-icon class="w-5 h-5" />
              </base-icon-button>
            </template>
            <slot />
            <template #footer>
              <slot name="footer" />
            </template>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>
