<script setup>
import BaseInput from 'src/components/base/base-input.vue';
import BaseLink from 'src/components/base/base-link.vue';
import BaseButton from 'src/components/base/base-button.vue';
import { translate } from 'src/helpers/translate';
import { reactive } from 'vue';
import { useLogin } from 'src/composes/auth/auth-login.compose';
import { useRouter } from 'vue-router';

const router = useRouter();
const { login, validation, loading } = useLogin();

const form = reactive({
  email: null,
  password: null,
});

async function handleSubmit() {
  const [success] = await login(form);

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
        id="email"
        type="email"
        :label="translate('auth.login.attributes.email')"
        :placeholder="translate('auth.login.attributes.email')"
        :color="validation.email ? 'red' : 'gray'"
        :message="validation.email"
        v-model="form.email"
      />
      <base-input
        with-label
        id="password"
        type="password"
        :label="translate('auth.login.attributes.password')"
        :placeholder="translate('auth.login.attributes.password')"
        :color="validation.password ? 'red' : 'gray'"
        :message="validation.password"
        v-model="form.password"
      >
        <template #label-action>
          <base-link :to="{ name: 'login' }">{{
            translate('auth.login.links.forgot-password')
          }}</base-link>
        </template>
      </base-input>

      <div>
        <base-button
          type="submit"
          color="sky"
          size="lg"
          :loading="loading"
          fullwidth
          >{{ translate('auth.login.actions.login') }}</base-button
        >
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      {{ translate('auth.login.messages.not-have-account') }}
      <base-link :to="{ name: 'register' }">{{
        translate('auth.login.links.register')
      }}</base-link>
    </p>
  </div>
</template>
