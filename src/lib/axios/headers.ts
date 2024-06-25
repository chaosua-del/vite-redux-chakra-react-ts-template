import { instance } from './instance';

export const headers = {
  setToken: (token: string) =>
    (instance.defaults.headers.common['Organisation'] = token),

  reset: () => {
    instance.defaults.headers.common['Organisation'] = null;
  },
};
