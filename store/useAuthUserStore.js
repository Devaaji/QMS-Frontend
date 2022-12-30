import { parseCookies, setCookie, destroyCookie } from 'nookies';
import create from 'zustand';

const useAuthUserStore = create(
  (set) => {
    const cookies = parseCookies();
    const { _t: accessToken, _r: refreshToken } = cookies;

    return {
      accessToken,
      refreshToken,
      setLogin: (newAccessToken, newRefresToken) => {
        setCookie(null, '_t', newAccessToken, {
          path: '/',
        });
        setCookie(null, '_r', newRefresToken, {
          path: '/',
        });
        set({
          accessToken: newAccessToken,
          refreshToken: newRefresToken,
        });
      },

      setLogout: () => {
        destroyCookie(null, '_t', { path: '/' });
        destroyCookie(null, '_r', { path: '/' });
        set({
          accessToken: undefined,
          refreshToken: undefined,
        });
      },
    };
  },
  { name: 'auth' }
);

export default useAuthUserStore;
