import axios from 'axios';
import config from '../../config';
import cookies from '../../utils/cookies';
import type { ResponseType } from './http-types';

type RefreshTokenResponseType =
  { isRefreshed: true; authToken: string } |
  { isRefreshed: false; authToken: null };

const refreshToken = async (): Promise<RefreshTokenResponseType> => {
  try {
    const refreshToken = cookies.refresh.get();

    const response = await axios.post<ResponseType<null, { authToken: string; refreshToken: string }>>(`${config.apiUrl}/auth/refresh-token`, { refreshToken });

    cookies.access.set(response.data.meta.authToken);
    cookies.refresh.set(response.data.meta.refreshToken);

    return { isRefreshed: true, authToken: response.data.meta.authToken };
  } catch {
    return { isRefreshed: false, authToken: null };
  }
};

let refreshingPromise: ReturnType<typeof refreshToken> | null = null;

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  if (!refreshingPromise) {
    refreshingPromise = refreshToken();
  }
  const result = await refreshingPromise;
  refreshingPromise = null;
  return result;
};
