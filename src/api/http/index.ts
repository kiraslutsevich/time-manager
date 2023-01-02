import axios from 'axios';
import _random from 'lodash/random';

import config, { isDev } from '../../config';
import getAuthString from './getAuthString';
import createErrorResponseHandler from './createErrorResponseHandler';
import resetTokenForInstance from './resetTokenForInstance';
import helpers from '../../utils/helpers';

export type { ResponseType } from './http-types';

const http = axios.create({
  baseURL: config.apiUrl,
  headers: {
    authorization: getAuthString(),
  },
});

export const resetToken = () => resetTokenForInstance(http);

http.interceptors.request.use(async (request) => {
  if (isDev) {
    await helpers.sleep(_random(100, 1000));
  }

  return request;
});

http.interceptors.response.use(undefined, createErrorResponseHandler(http));

export default http;
