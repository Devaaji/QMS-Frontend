import merge from 'merge';
import { destroyCookie, parseCookies } from 'nookies';

export const getServerSidePropsWithAuth = async (context, callback) => {
  const { _t: accessToken, _r: refreshToken } = parseCookies(context, {
    path: '/',
  });

  if (accessToken && refreshToken) {
    const returnValue = {
      props: {
        fallback: {},
      },
    };
    if (callback) {
      const callbackValue = await callback(accessToken);
      const returnMergedValue = merge.recursive(returnValue, callbackValue);

      return returnMergedValue;
    }
    return returnValue;
  }

  destroyCookie(context, '_t', { path: '/' });
  destroyCookie(context, '_r', { path: '/' });

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};
