import { parseCookies } from 'nookies';

export const getServerSidePropsWithNoAuth = async (context) => {
  const { _t: accessToken, _r: refreshToken } = parseCookies(context, {
    path: '/',
  });

  if (accessToken && refreshToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
