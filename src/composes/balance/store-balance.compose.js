import { useRequest } from 'src/composes/request.compose';

export function useStoreBalance() {
  const { loading, validation, error, request, resetError, resetValidation } =
    useRequest({
      url: '/balances',
      method: 'post',
      notifyOnError: true,
    });

  async function store(values) {
    return await request(values);
  }

  return { loading, validation, error, store, resetError, resetValidation };
}
