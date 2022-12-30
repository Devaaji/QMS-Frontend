import axios from 'axios';
import useAuthUserStore from '../store/useAuthUserStore';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030/',
});

axiosInstance.interceptors.request.use(async (response) => {
  if (response) {
    const getRefresToken = await axios
      .get(response.baseURL + `auth/token`, {
        headers: {
          Authorization: `Bearer ${useAuthUserStore.getState().refreshToken}`,
        },
      })
      .then((res) => res.data);

    const { accessToken } = getRefresToken;
    response.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return response;
});

export const getFetcher = (resource, init) =>
  axiosInstance
    .get(resource, init)
    .then((res) => res.data)
    .catch(
      (err) =>
        err.response.status === 403 && useAuthUserStore.getState().setLogout()
    );

export const postFetcher = (resource, init) =>
  axiosInstance
    .post(resource, init)
    .then((res) => res.data)
    .catch(
      (err) =>
        err.response.status === 403 && useAuthUserStore.getState().setLogout()
    );

export default axiosInstance;
