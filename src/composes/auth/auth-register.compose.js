import { useRequest } from 'src/composes/request.compose';
import { useAuthStore } from 'src/store/modules/auth.module';

export function useRegister() {
  const authStore = useAuthStore();
  const { loading, error, validation, request } = useRequest({
    url: '/auth/register',
    method: 'post',
    notifyOnError: true,
  });

  async function register(payload) {
    const [success, error] = await request(payload);

    if (success) {
      authStore.login({ accessToken: success.accessToken });
    }

    return [success, error];
  }

  return { loading, error, validation, register };
}
