import { useRequest } from 'src/composes/request.compose';
import { useAuthStore } from 'src/store/modules/auth.module';

export function useLogin() {
  const authStore = useAuthStore();
  const { loading, error, validation, request } = useRequest({
    url: '/auth/login',
    method: 'post',
    notifyOnError: true,
  });

  async function login(payload) {
    const [success, error] = await request(payload);

    if (success) {
      authStore.login({ accessToken: success.accessToken });
    }

    return [success, error];
  }

  return { loading, error, validation, login };
}
