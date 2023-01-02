import type { AxiosInstance, HeadersDefaults } from 'axios';

import getAuthString from './getAuthString';

type HeadersType = HeadersDefaults & { authorization: string };

const resetTokenForInstance = (axiosInstance: AxiosInstance) => {
  // eslint-disable-next-line no-param-reassign
  (axiosInstance.defaults.headers as unknown as HeadersType).authorization = getAuthString();
};

export default resetTokenForInstance;
