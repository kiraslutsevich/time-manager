import axios from 'axios';
import type { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';

import config from '../../config';
import helpers from '../../utils/helpers';
import refreshToken from './refreshToken';
import type { ErrorResponseType } from './http-types';
import resetTokenForInstance from './resetTokenForInstance';
import getAuthString from './getAuthString';

const EXPIRED_ERROR_CODE = 'auth.token.expired';

const createErrorResponseHandler = (axiosInstance: AxiosInstance) => {
  return async (err: AxiosError<ErrorResponseType>) => {
    const request = err.config as AxiosRequestConfig & { numberOfAttempts: number };

    if (
      err.message === 'Network Error' &&
      (request.numberOfAttempts || 0) < config.maxNumberOfAttempts
    ) {
      await helpers.sleep(500);
      request.numberOfAttempts = (request.numberOfAttempts || 1) + 1;
      return axiosInstance.request(request);
    }

    if (err.response?.data.code === EXPIRED_ERROR_CODE) {
      const refreshResponse = await refreshToken();

      if (refreshResponse.isRefreshed) {
        request.headers = { authorization: getAuthString() };
        resetTokenForInstance(axiosInstance);

        return axios(request);
      }
    }

    throw err;
  };
};

export default createErrorResponseHandler;
