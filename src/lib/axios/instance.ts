import axios, { AxiosError } from 'axios';

import { setError } from '@/redux/auth/authSlice';
import { persistor, store } from '@/redux/store';
import { API_URL } from '@/shared/constants/config';

import { headers } from './headers';

persistor.subscribe(() => {
  const { token } = store.getState();
  token && headers.setToken(token);
});

export const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error instanceof AxiosError) {
      if (error.code === AxiosError.ERR_NETWORK) {
        store.dispatch(setError('Cервер не відповідає'));
        return error;
      }
    }

    return error;
  }
);
