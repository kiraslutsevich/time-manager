import cookie from 'js-cookie';

class CookieItem<D = string> {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  get(): D | null {
    try {
      const data = cookie.get(this.key) as string;
      const parsed = JSON.parse(data);
      return parsed;
    } catch (err) {
      return null;
    }
  }

  set(data: D) {
    return cookie.set(this.key, JSON.stringify(data));
  }

  remove(key: string) {
    cookie.remove(key);
  }
}

const cookies = {
  access: new CookieItem('token'),
  refresh: new CookieItem('refresh'),
};

export default cookies;