import type { IUser } from '../types/mainTypes';
import cookies from '../utils/cookies';
import type { ResponseType } from './http';
import http, { resetToken } from './http';

const authPath = '/auth';

const signIn = (data: { email: string; password: string }) => {
  return http.post<ResponseType<IUser, { authToken: string; refreshToken: string }>>(
    `${authPath}/sign-in`,
    data,
  )
    .then((response) => {
      cookies.access.set(response.data.meta.authToken);
      cookies.refresh.set(response.data.meta.refreshToken);
      resetToken();

      return response;
    });
};

const getMe = () => {
  return http.get<ResponseType<IUser>>(`${authPath}/me`);
};

const authApi = {
  signIn,
  getMe,
};


export default authApi;
