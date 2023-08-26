<script setup>
import BaseInput from 'src/components/base/base-input.vue';
import BaseLink from 'src/components/base/base-link.vue';
import BaseButton from 'src/components/base/base-button.vue';
import { translate } from 'src/helpers/translate';
import { reactive } from 'vue';
import { useRegister } from 'src/composes/auth/auth-register.compose.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const { register, validation, loading } = useRegister();

const form = reactive({
  email: null,
  name: null,
  password: null,
  password_confirmation: null,
});

async function handleSubmit() {
  const [success] = await register(form);

  if (success) {
    router.push({ name: 'home' });
  }
}
</script>

<template>
  <div>
    <form class="space-y-6" v-on:submit.prevent="handleSubmit">
      <base-input
        with-label
        id="name"
        type="text"
        :label="translate('auth.register.attributes.name')"
        :placeholder="translate('auth.register.attributes.name')"
        :color="validation.name ? 'red' : 'gray'"
        :message="validation.name"
        v-model="form.name"
      />
      <base-input
        with-label
        id="email"
        type="email"
        :label="translate('auth.register.attributes.email')"
        :placeholder="translate('auth.register.attributes.email')"
        :color="validation.email ? 'red' : 'gray'"
        :message="validation.email"
        v-model="form.email"
      />
      <base-input
        with-label
        id="password"
        type="password"
        :label="translate('auth.register.attributes.password')"
        :placeholder="translate('auth.register.attributes.password')"
        :color="validation.password ? 'red' : 'gray'"
        :message="validation.password"
        v-model="form.password"
      />
      <base-input
        with-label
        id="password_confirmation"
        type="password"
        :label="translate('auth.register.attributes.password_confirmation')"
        :placeholder="
          translate('auth.register.attributes.password_confirmation')
        "
        :color="validation.password_confirmation ? 'red' : 'gray'"
        :message="validation.password_confirmation"
        v-model="form.password_confirmation"
      />

      <div>
        <base-button
          type="submit"
          color="sky"
          size="lg"
          :loading="loading"
          fullwidth
          >{{ translate('auth.register.actions.register') }}</base-button
        >
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      {{ translate('auth.register.messages.already-have-account') }}
      <base-link :to="{ name: 'login' }">{{
        translate('auth.register.links.login')
      }}</base-link>
    </p>
  </div>
</template>
