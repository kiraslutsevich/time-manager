import store, { resetStore } from '../store';
import cookies from './cookies';

const sleep = (timeout: number) => new Promise((res) => { setTimeout(res, timeout); });

const logOut = () => {
  store.dispatch(resetStore());
  cookies.access.remove('access');
  cookies.refresh.remove('refresh');
};

const helpers = {
  sleep,
  logOut,
};

export default helpers;
